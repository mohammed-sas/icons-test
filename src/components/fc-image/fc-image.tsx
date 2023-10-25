import { Component, h, Prop, Watch, State } from '@stencil/core';

@Component({
  tag: 'fc-image',
  styleUrl: 'fc-image.css',
  shadow: true,
})
export class FcImage {
  @Prop() name: string;
  @Prop() width: number;
  @Prop() height: number;
  @State() sym: symbol;
  @State() baseURL: string;
  @State() url: any;

  @Watch('name')
  async componenetWillLoad() {
    this.sym = Symbol.for('@facilio/icons/config');
    await this.loadIcon();
  }

  async loadIcon() {
    let cdnUrl = 'https://static.facilio.com/icons/svg/';
    let baseUrl = window[this.sym]?.baseUrl ? window[this.sym].baseURL : cdnUrl;
    this.url = `${baseUrl}image/${this.name}.svg`;
  }
  render() {
    return (
      <img
        src={this.url}
        alt={this.name}
        style={{
          maxHeight: this.height + 'px',
          maxWidth: this.width + 'px',
          width: 'auto',
          height: 'auto',
        }}
      />
    );
  }
}
