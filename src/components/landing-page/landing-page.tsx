import { Component, Element, Prop, h } from '@stencil/core';
import { ResponsiveContainer } from '@ionic-internal/sites-shared';

@Component({
  tag: 'landing-page',
  styleUrl: 'landing-page.scss'
})
export class LandingPage {
  @Element() el!: Element;

  @Prop() query = '';
  @Prop() data: any;

  render() {
    return(
      <main>
        <div class="wrapper">
          <ResponsiveContainer>
            <div class="content">
              <h1>Beautifully crafted open source icons</h1>
              <p class="lead">Premium designed icons for use in web, iOS, Android, and desktop apps. Support for SVG and web font. Completely open source, MIT licensed and built by the <a href="https://ionicframework.com/">Ionic Framework</a> team.</p>
            </div>
          </ResponsiveContainer>
          <icon-list query={this.query} data={this.data}></icon-list>
        </div>

        <footer-bar></footer-bar>
      </main>
    );
  }
}
