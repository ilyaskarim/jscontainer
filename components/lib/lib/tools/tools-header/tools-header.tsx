import styles from "./tools-header.module.scss";

export interface ToolsHeaderProps {
  children: React.ReactNode;
}

export const ToolsHeader = (props: ToolsHeaderProps) => {
  return (
    <div className={styles.toolsHeader}>
      <h1>{props.children}</h1>
    </div>
  );
};
