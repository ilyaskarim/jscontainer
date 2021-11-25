import styles from "./javascript-performance-test.module.scss";
import { ToolsHeader } from "./../../../index";
import MonacoReactEditor from "@monaco-editor/react";
import { Button, ProgressBar } from "@blueprintjs/core";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import classNames from "classnames";
import moment from "moment";
import { orderBy } from "lodash";

const sourceOfTruth = {
  id: 0,
  code: "",
  rank: 0,
  hasErrors: false,
  hasErrorMessage: "",
  startTime: 0,
  endTime: 0,
  diff: 0,
};

let timeout: any;

export interface JavascriptPerformanceTestProps {}

export const JavascriptPerformanceTest = (
  props: JavascriptPerformanceTestProps
) => {
  const theme = useSelector((state: any) => state.container.theme);
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [snippets, setSnippets] = useState([
    { ...sourceOfTruth, id: 1 },
    { ...sourceOfTruth, id: 2 },
  ]);

  const handleRunTest = () => {
    setIsTestRunning(true);

    return snippets.map((snippet, index) => {
      var list = [...snippets];
      try {
        snippet.startTime = performance.now();
        eval(snippet.code);
        snippet.endTime = performance.now();
        snippet.hasErrors = false;
        snippet.hasErrorMessage = "";
      } catch (e) {
        snippet.endTime = performance.now();
        snippet.hasErrors = true;
        snippet.hasErrorMessage = e.message;
      }

      snippet.diff = Math.abs(snippet.startTime - snippet.endTime);

      list[index] = snippet;

      setSnippets(list);

      if (snippets.length - 1 === index) {
        setIsTestRunning(false);
      }
      return snippet;
    });
  };

  return (
    <div className={styles.JavascriptPerformanceTestPage}>
      <ToolsHeader>Javascript Performance Test</ToolsHeader>
      <div className={styles.JavascriptPerformanceTestPageLayout}>
        <div className={styles.JavascriptPerformanceTestPageCodeSnippets}>
          {snippets.map((snippet, index) => {
            return (
              <div key={index}>
                <div
                  className={classNames({
                    [styles.JavascriptPerformanceTestPageCodeSnippetsHeader]:
                      true,
                    [styles.JavascriptPerformanceTestPageCodeSnippetsHeaderErrors]:
                      snippet.hasErrors,
                  })}
                >
                  <div>
                    <h3>
                      {snippet.rank > 0 && (
                        <span
                          className={classNames({
                            [styles.JavascriptPerformanceTestPageCodeSnippetsHeaderCount]:
                              true,
                            [styles.JavascriptPerformanceTestPageCodeSnippetsHeaderCountWinner]:
                              snippet.rank === 1,
                          })}
                        >
                          {snippet.rank}
                        </span>
                      )}
                      Code Snippet {index + 1}
                    </h3>
                  </div>
                  <div
                    className={
                      styles.JavascriptPerformanceTestPageCodeSnippetsHeaderActions
                    }
                  >
                    <Button
                      intent="danger"
                      disabled={snippets.length <= 1}
                      icon="trash"
                      onClick={() => {
                        if (snippets.length === 1) {
                          return;
                        }
                        var list = [...snippets];
                        list.splice(index, 1);
                        setSnippets(list);
                      }}
                    ></Button>
                  </div>
                </div>
                <MonacoReactEditor
                  className={classNames({
                    [styles.JavascriptPerformanceTestEditor]: true,
                    [styles.JavascriptPerformanceTestEditorWinnner]:
                      snippet.rank === 1,
                  })}
                  language="javascript"
                  options={{
                    minimap: {
                      enabled: false,
                    },
                  }}
                  onChange={(value: string) => {
                    var list = [...snippets];
                    var currentSnippet = list[index];
                    currentSnippet.code = value;

                    list[index] = currentSnippet;

                    setSnippets(list);
                  }}
                  loading={"Loading editor please wait..."}
                  theme={theme === "dark" ? "vs-dark" : ""}
                  height="100px"
                ></MonacoReactEditor>

                {snippet.hasErrors && (
                  <p
                    className={
                      styles.JavascriptPerformanceTestPageCodeSnippetsHeaderErrorsMessage
                    }
                  >
                    {snippet.hasErrorMessage}
                  </p>
                )}
              </div>
            );
          })}
          <br />
          <div className={styles.JavascriptPerformanceTestPageLayoutFooter}>
            <div>
              <Button
                disabled={isTestRunning}
                onClick={() =>
                  setSnippets([
                    ...snippets,
                    { ...sourceOfTruth, id: snippets.length + 1 },
                  ])
                }
              >
                Add more code snippet
              </Button>
            </div>
            <div
              className={
                styles.JavascriptPerformanceTestPageLayoutFooterActions
              }
            >
              <Button
                intent="success"
                loading={isTestRunning}
                disabled={snippets.length === 1}
                onClick={() => {
                  var list = [...handleRunTest()];
                  console.log(orderBy(list, ["diff"], "asc"));
                  orderBy(list, ["diff"], "asc").forEach((element, index) => {
                    element.rank = index + 1;
                    const findIndex = snippets.findIndex(
                      (c) => c.id === element.id
                    );
                    if (findIndex > -1) {
                      list[findIndex] = element;
                    }
                    setSnippets(list);
                  });
                }}
              >
                Run Test
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
