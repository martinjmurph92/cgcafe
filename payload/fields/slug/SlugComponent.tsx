"use client";

import React, { useEffect } from "react";
import {
  FieldLabel,
  TextInput,
  useDocumentInfo,
  useField,
  useFormFields,
} from "@payloadcms/ui";
import { TextFieldClientProps } from "payload";

import { formatSlug } from "@/lib/formatting";

import "./index.scss";

type SlugComponentProps = {
  fieldToUse: string;
} & TextFieldClientProps;

export const SlugComponent: React.FC<SlugComponentProps> = ({
  field,
  fieldToUse,
  path,
  readOnly,
}) => {
  const { hasPublishedDoc } = useDocumentInfo();

  const { label } = field;

  const { value, setValue } = useField<string>({ path: path || field.name });

  // The value of the field we're listening to for the slug
  const targetFieldValue = useFormFields(([fields]) => {
    return fields[fieldToUse]?.value as string;
  });

  useEffect(() => {
    // Only auto-generate slug if document is not published
    if (hasPublishedDoc || !targetFieldValue) return;

    const formattedSlug = formatSlug(targetFieldValue);

    if (value !== formattedSlug) {
      setValue(formattedSlug);
    }
  }, [hasPublishedDoc, targetFieldValue, value, setValue]);

  return (
    <div className="field-type slug-field-component">
      <div className="label-wrapper">
        <FieldLabel htmlFor={`field-${path}`} label={label} />
      </div>

      <TextInput
        value={value}
        onChange={setValue}
        path={path || field.name}
        readOnly={Boolean(readOnly)}
      />
    </div>
  );
};
