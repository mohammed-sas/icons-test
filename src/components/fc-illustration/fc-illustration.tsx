import { Component, h, Prop, Watch, State } from '@stencil/core';

@Component({
  tag: 'fc-illustration',
  styleUrl: 'fc-illustration.css',
  shadow: true,
})
export class FcIllustration {
  @Prop() name: string;
  @Prop() size: string = 'S';
  @State() sym: symbol;
  @State() baseURL: string;
  @State() url: any;
  @Watch('name')
  @Watch('size')
  async componenetWillLoad() {
    this.sym = Symbol.for('@facilio/icons/config');
    await this.loadIcon();
  }

  async loadIcon() {
    let cdnUrl = 'https://static.facilio.com/icons/svg/';
    let baseUrl = window[this.sym]?.baseUrl ? window[this.sym].baseURL : cdnUrl;
    this.url = `${baseUrl}illustrations/${this.name}.webp`;
  }
  render() {
    const SIZE_HASH = {
      S: '80',
      M: '160',
      L: '320',
    };
    let illustrationSize = SIZE_HASH[this.size];

    return (
      <img
        src={this.url}
        alt={this.name}
        style={{
          maxHeight: illustrationSize,
          maxWidth: illustrationSize,
          width: 'auto',
          height: 'auto',
        }}
      />
    );
  }
}
