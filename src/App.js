import React, { Component } from 'react';
import Header from './containers/Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <container>
          <sidebar>
            I am sidebar
          </sidebar>
          <content>
          <img src="images/product1.jpg" />
          To get started, edit <code>src/App.js</code> and save to reload.
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac fringilla dui. Cras in venenatis diam. Maecenas tristique sit amet turpis non laoreet. Fusce tristique velit massa, vitae varius sapien blandit in. Sed condimentum cursus ligula, non tempus ligula. Duis in eros mattis, ultricies est ac, vulputate enim. Phasellus ut nisl tellus. Duis convallis suscipit turpis quis ultrices. Mauris ac tincidunt enim, quis rutrum turpis. Phasellus venenatis leo id neque tincidunt luctus. Morbi turpis quam, pellentesque in dapibus pellentesque, accumsan eu sapien. Donec ornare id diam ornare molestie.</p>

          <p>Duis congue vulputate tristique. Aliquam venenatis dictum elit nec volutpat. Mauris commodo molestie nulla ut condimentum. Aenean feugiat lorem ac erat ultricies tempor. Nullam eget lobortis odio, eu rutrum arcu. Ut scelerisque est eu purus pharetra luctus eu eu massa. Quisque quis lacus libero. In hac habitasse platea dictumst. Cras et tortor dignissim, tempor ligula ut, venenatis tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam non accumsan elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <p>Donec pharetra aliquam leo sed maximus. Ut in ante ante. Cras vitae suscipit nisi. Vestibulum quis lectus vel orci pulvinar sodales. Pellentesque tempus mattis sem, ut porttitor magna aliquam sit amet. Nulla vel mauris velit. Sed eros lorem, maximus quis nunc ut, varius tincidunt mauris. Suspendisse ac justo dignissim, placerat dolor quis, varius nibh. Aliquam purus risus, lobortis non viverra id, ultricies sit amet nisi. Suspendisse at diam volutpat, blandit tellus eu, faucibus nisl. Praesent ut tellus consectetur, imperdiet purus vel, porttitor augue. Donec quis nisi in nulla consequat varius ac quis nisi. Duis dolor tortor, dapibus id placerat non, pellentesque vel mauris. Quisque nec elit nec sapien aliquam sollicitudin at sit amet nisi.</p>

          <p>Pellentesque nulla eros, suscipit sit amet gravida eget, vestibulum vel lorem. Nunc in feugiat ante. Vestibulum eros arcu, pretium vel scelerisque vel, aliquam non lectus. Nam imperdiet semper lectus. Nam sit amet urna nec lorem pulvinar vulputate et vitae mauris. Mauris quis placerat orci. Sed in auctor quam, in tincidunt risus. Vivamus libero sem, facilisis eu fermentum at, interdum placerat felis.</p>

          <p>Sed metus ante, venenatis in elit in, consequat dignissim enim. Curabitur dignissim ultrices erat sed pretium. Mauris a ligula faucibus felis bibendum ultricies sit amet sit amet mauris. Curabitur vitae lectus ac mi varius convallis at ut odio. Sed quis eros eu nisi ullamcorper tempus sed sed justo. Proin ullamcorper dignissim pharetra. Curabitur a tempor tortor. Donec sollicitudin non lorem vel accumsan. Suspendisse et purus lacinia felis aliquam finibus. Suspendisse sit amet enim scelerisque, lobortis elit sit amet, venenatis magna.</p>
          </content>
          <sidebar>
            I am sidebar
          </sidebar>
        </container>
        <footer>
          Copyright (c) 2018
        </footer>
      </div>
    );
  }
}

export default App;
