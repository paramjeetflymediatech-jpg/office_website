'use client';

import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  Essentials,
  Paragraph,
  Heading,
  Link,
  List,
  TodoList,
  Table,
  TableToolbar,
  BlockQuote,
  SourceEditing,
  Alignment,
  FontColor,
  FontBackgroundColor,
  FontSize,
  GeneralHtmlSupport,
  CodeBlock,
  HorizontalLine
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

interface CKEditorWrapperProps {
  value: string;
  onChange: (data: string) => void;
  placeholder?: string;
}

export default function CKEditorWrapper({ value, onChange, placeholder }: CKEditorWrapperProps) {
  return (
    <div className="prose max-w-none ck-editor-custom">
      <CKEditor
        editor={ClassicEditor}
        config={{
          plugins: [
            Essentials,
            Paragraph,
            Heading,
            Bold,
            Italic,
            Underline,
            Strikethrough,
            Subscript,
            Superscript,
            Link,
            List,
            TodoList,
            Table,
            TableToolbar,
            BlockQuote,
            SourceEditing,
            Alignment,
            FontColor,
            FontBackgroundColor,
            FontSize,
            GeneralHtmlSupport,
            CodeBlock,
            HorizontalLine
          ],
          toolbar: [
            'sourceEditing',
            '|',
            'heading',
            '|',
            'fontSize',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'subscript',
            'superscript',
            '|',
            'alignment',
            '|',
            'bulletedList',
            'numberedList',
            'todoList',
            '|',
            'link',
            'insertTable',
            'blockQuote',
            'codeBlock',
            'horizontalLine',
            '|',
            'undo',
            'redo'
          ],
          table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
          },
          placeholder: placeholder || 'Type or paste the complete post content here...',
          htmlSupport: {
            allow: [
              {
                name: /.*/,
                attributes: true,
                classes: true,
                styles: true
              }
            ]
          },
          licenseKey: 'GPL'
        }}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
      />
      <style>{`
        .ck-editor-custom .ck-editor__editable_inline {
          min-height: 450px;
          border-bottom-left-radius: 0.75rem !important;
          border-bottom-right-radius: 0.75rem !important;
          font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
          font-size: 16px;
          color: #1a202c;
        }
        .ck-editor-custom .ck-toolbar {
          border-top-left-radius: 0.75rem !important;
          border-top-right-radius: 0.75rem !important;
          border-color: #e2e8f0 !important;
          background-color: #f8fafc !important;
        }
        .ck-editor-custom .ck-editor {
          --ck-color-focus-border: #ff9900 !important;
          --ck-color-shadow: rgba(255, 153, 0, 0.1) !important;
          --ck-color-base-border: #e2e8f0 !important;
          border-radius: 0.75rem !important;
        }
        .ck-editor-custom .ck-content h2 {
          font-size: 1.5em;
          font-weight: bold;
          margin-top: 1em;
          margin-bottom: 0.5em;
        }
        .ck-editor-custom .ck-content h3 {
          font-size: 1.25em;
          font-weight: bold;
          margin-top: 1em;
          margin-bottom: 0.5em;
        }
        .ck-editor-custom .ck-content h4 {
          font-size: 1.1em;
          font-weight: bold;
          margin-top: 1em;
          margin-bottom: 0.5em;
        }
        .ck-editor-custom .ck-content p {
          margin-bottom: 1em;
          line-height: 1.6;
        }
        .ck-editor-custom .ck-content ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1em;
        }
        .ck-editor-custom .ck-content ol {
          list-style-type: decimal;
          padding-left: 1.5rem;
          margin-bottom: 1em;
        }
        .ck-editor-custom .ck-content blockquote {
          border-left: 4px solid #e2e8f0;
          padding-left: 1rem;
          color: #4a5568;
          font-style: italic;
          margin: 1em 0;
        }
      `}</style>
    </div>
  );
}
