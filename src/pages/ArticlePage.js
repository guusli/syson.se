import React from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./ArticlePage.module.css";
import ArticleHeader from "../components/ArticleHeader";
import Konsultlivet from "./Konsultlivet";
import Gladbladet from "./Gladbladet";
import KalkylenArticle from "./KalkylenArticle";
import NotFoundPage from "./404";

export default function ArticlePage() {
  return (
    <>
      <ArticleHeader />
      <main className={styles.content}>
        <Switch>
          <Route path="/konsultlivet" component={Konsultlivet} />
          <Route path="/gladbladet" component={Gladbladet} />
          <Route path="/lonemodell" component={KalkylenArticle} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </>
  );
}
