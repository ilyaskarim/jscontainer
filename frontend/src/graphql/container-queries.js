import { gql } from "apollo-boost";
export const CreateContainerMutation = gql`
  mutation CreateContainer($input: ContainerInput) {
    createContainer(input: $input) {
      id
      title
      slug
      description
      forked_from_container_id
      version
      js_links
      css_links
      js_compiler
      js_raw
      js_compiled
      css_compiler
      css_raw
      css_compiled
      html_compiler
      html_raw
      html_compiled
      organization_id
      show_in_search
      private
      created_by_id
      created_at
      updated_at
    }
  }
`;
