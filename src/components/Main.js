import React from "react";

export default class Main extends React.Component {
  render() {
    return(
        <div className={`box_main clearfix`}>
          <article>
            <section>
              <h2>Contetns Title</h2>
              <div className={`photo`}>
                <a href="https://www.pexels.com/photo/low-angle-view-of-white-concrete-building-2103825/" target="_blank" rel="noopener noreferrer">
                  <img src="https://images.pexels.com/photos/2103825/pexels-photo-2103825.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="By Matthis Volquardsen"/>
                  <p className={`caption`}>Photo by Matthis Volquardsen from Pexels</p>
                </a>

              </div>
              <p>Sample text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </article>
        </div>
    );
  }
}
