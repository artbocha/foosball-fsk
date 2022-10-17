import Header from "../Header";
import Footer from "../Footer";
import css from "./styles.module.css";

const Layout = ({children}) => (
  <>
    <Header />
    <div className={css.page}>{children}</div>
    <Footer />
  </>
);

export default Layout;
