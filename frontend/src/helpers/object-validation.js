import Schema from "validate";

export const ContainerValidation = new Schema({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  forked_from_container_id: {
    type: Number,
    required: false,
  },
  version: {
    type: String,
    required: true,
  },
  js_links: {
    type: String,
    required: false,
  },
  css_links: {
    type: String,
    required: false,
  },
  js_compiler: {
    type: String,
    required: false,
  },
  js_raw: {
    type: String,
    required: false,
  },
  js_compiled: {
    type: String,
    required: false,
  },
  css_compiler: {
    type: String,
    required: false,
  },
  css_raw: {
    type: String,
    required: false,
  },
  css_compiled: {
    type: String,
    required: false,
  },
  html_compiler: {
    type: String,
    required: false,
  },
  html_raw: {
    type: String,
    required: false,
  },
  html_compiled: {
    type: String,
    required: false,
  },
  organization_id: {
    type: Number,
    required: false,
  },
  show_in_search: {
    type: Boolean,
    required: false,
  },
  private: {
    type: Boolean,
    required: false,
  },
  created_by_id: {
    type: Number,
    required: false,
  },
});

export const ValidateContainer = (obj) => {
  return new Promise((resolve, reject) => {
    const validateErrors = ContainerValidation.validate(obj);
    if (validateErrors.length > 0) {
      reject(validateErrors);
    } else {
      resolve(true);
    }
  });
};
