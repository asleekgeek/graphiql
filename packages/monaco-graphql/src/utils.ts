/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import { SchemaConfig } from './typings';
import type {
  IRange as GraphQLRange,
  IPosition as GraphQLPosition,
  Diagnostic,
  CompletionItem as GraphQLCompletionItem,
} from 'graphql-language-service';
import type * as monaco from './monaco-editor';
import { buildASTSchema, printSchema } from 'graphql';
import { Position } from 'graphql-language-service';
// Importing from 'monaco-editor' in a worker throws “ReferenceError: window is not defined”
import { MarkerSeverity } from 'monaco-editor/esm/vs/editor/common/standalone/standaloneEnums.js';

// for backwards compatibility
export const getModelLanguageId = (model: monaco.editor.ITextModel) => {
  if ('getModeId' in model) {
    // @ts-expect-error -- for <0.30.0 support
    return model.getModeId();
  }
  return model.getLanguageId();
};

export function toMonacoRange(range: GraphQLRange): monaco.IRange {
  return {
    startLineNumber: range.start.line + 1,
    startColumn: range.start.character + 1,
    endLineNumber: range.end.line + 1,
    endColumn: range.end.character + 1,
  };
}

export function toGraphQLPosition(position: monaco.Position): GraphQLPosition {
  return new Position(position.lineNumber - 1, position.column - 1);
}

export type GraphQLWorkerCompletionItem = Omit<
  GraphQLCompletionItem,
  'documentation'
> & {
  range?: monaco.IRange;
  command?: monaco.languages.CompletionItem['command'];
  documentation?: monaco.languages.CompletionItem['documentation'];
};

export function toCompletion(
  entry: GraphQLCompletionItem,
  range?: GraphQLRange,
): GraphQLWorkerCompletionItem {
  return {
    label: entry.label,
    insertText: entry.insertText,
    sortText: entry.sortText,
    filterText: entry.filterText,
    ...(entry.documentation && {
      documentation: {
        value: entry.documentation,
      },
    }),
    detail: entry.detail,
    ...(range && { range: toMonacoRange(range) }),
    kind: entry.kind,
    ...(entry.insertTextFormat && { insertTextFormat: entry.insertTextFormat }),
    ...(entry.insertTextMode && { insertTextMode: entry.insertTextMode }),
    ...(entry.command && {
      command: { ...entry.command, id: entry.command.command },
    }),
    ...(entry.labelDetails && { labelDetails: entry.labelDetails }),
  };
}

/**
 * Monaco and VSCode have slightly different ideas of marker severity.
 * for example, vscode has Error = 1, whereas monaco has Error = 8. this takes care of that
 * @param severity - optional vscode diagnostic severity to convert to monaco MarkerSeverity
 * @returns the matching marker severity level on monaco's terms
 */
export function toMonacoSeverity(
  severity?: Diagnostic['severity'],
): monaco.MarkerSeverity {
  const severityMap = {
    1: MarkerSeverity.Error, // MarkerSeverity.Error
    2: MarkerSeverity.Warning, // MarkerSeverity.Warning
    3: MarkerSeverity.Info, // MarkerSeverity.Info
    4: MarkerSeverity.Hint, // MarkerSeverity.Hint
  };

  return severity ? severityMap[severity] : severityMap[2];
}

export function toMarkerData(
  diagnostic: Diagnostic,
): monaco.editor.IMarkerData {
  return {
    startLineNumber: diagnostic.range.start.line + 1,
    endLineNumber: diagnostic.range.end.line + 1,
    startColumn: diagnostic.range.start.character + 1,
    endColumn: diagnostic.range.end.character,
    message: diagnostic.message,
    severity: toMonacoSeverity(diagnostic.severity),
    code: (diagnostic.code as string) || undefined,
  };
}

/**
 * Send the most minimal string representation
 * to the worker for language service instantiation
 */
export const getStringSchema = (schemaConfig: SchemaConfig) => {
  const {
    schema: graphQLSchema,
    documentAST,
    introspectionJSON,
    introspectionJSONString,
    documentString,
    ...rest
  } = schemaConfig;
  if (graphQLSchema) {
    return {
      ...rest,
      documentString: printSchema(graphQLSchema),
    };
  }
  if (introspectionJSONString) {
    return {
      ...rest,
      introspectionJSONString,
    };
  }
  if (documentString) {
    return {
      ...rest,
      documentString,
    };
  }
  if (introspectionJSON) {
    return {
      ...rest,
      introspectionJSONString: JSON.stringify(introspectionJSON),
    };
  }

  if (documentAST) {
    const schema = buildASTSchema(documentAST, rest.buildSchemaOptions);
    return {
      ...rest,
      documentString: printSchema(schema),
    };
  }
  throw new Error('No schema supplied');
};
