import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <footer className="bg-dark text-center text-lg-start text-white">
          <div className="container p-4">
            <div className="row mt-4">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">See other books</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="/" className="text-white">
                      <i className="fas fa-book fa-fw fa-sm me-2"></i>
                      Bestsellers
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white">
                      <i className="fas fa-book fa-fw fa-sm me-2"></i>All books
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white">
                      <i className="fas fa-user-edit fa-fw fa-sm me-2"></i>Our
                      authors
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Execution of the contract</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="/" className="text-white">
                      <i className="fas fa-shipping-fast fa-fw fa-sm me-2"></i>
                      Supply
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white">
                      <i className="fas fa-backspace fa-fw fa-sm me-2"></i>
                      Returns
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white">
                      <i className="far fa-file-alt fa-fw fa-sm me-2"></i>
                      Regulations
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white">
                      <i className="far fa-file-alt fa-fw fa-sm me-2"></i>
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Publishing house</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="/" className="text-white">
                      The BookStore
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white">
                      123 Street
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white">
                      05765 NY
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white">
                      <i className="fas fa-briefcase fa-fw fa-sm me-2"></i>Send
                      us a book
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Write to us</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="/" className="text-white">
                      <i className="fas fa-at fa-fw fa-sm me-2"></i>Help in
                      purchasing
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white">
                      <i className="fas fa-shipping-fast fa-fw fa-sm me-2"></i>
                      Check the order status
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white">
                      <i className="fas fa-envelope fa-fw fa-sm me-2"></i>Join
                      the newsletter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center p-3">
            © 2021 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
