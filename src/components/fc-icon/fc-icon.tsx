import { Component, h, Prop, State, Watch } from '@stencil/core';
// import { getSvgContent, iconContent } from '../../utils/request';
@Component({
  tag: 'fc-icon',
  styleUrl: 'fc-icon.css',
  shadow: true,
})
export class FcIcon {
  @Prop() name: string;
  @Prop() group: string = 'default';
  @Prop() size: string = '20';
  @Prop() color: string;
  @State() svgContent: any;
  @State() iconClass: string;
  @State() icon: any;
  @State() baseURL: string;
  @State() sym: symbol;
  @State() url: string;
  @Watch('name')
  @Watch('icon')
  async componentWillLoad() {
    this.sym = Symbol.for('@facilio/icons/config');

    await this.loadIcon();
  }
  async loadIcon() {
    // give the cdn url or url based on @facilio/icons/config symbol
    let cdnUrl = 'https://static.facilio.com/icons/svg/';
    let baseUrl = window[this.sym]?.baseUrl ? window[this.sym].baseURL : cdnUrl;
    const url = `${baseUrl}${this.group}/${this.name}.svg`;
    this.url = url;
    // if (iconContent.has(url)) {
    //   this.svgContent = iconContent.get(url);
    // } else {
    //   await getSvgContent(url).then(() => (this.svgContent = iconContent.get(url)));
    // }
  }

  render() {
    // let styledSvg = `<svg class="${this.iconClass ? this.iconClass : 'icon'}" style="height:${this.size}px; width: ${this.size}px; fill: ${this.color}"`;
    // styledSvg = this.svgContent.replace(/<svg/, styledSvg);
    // this.icon = styledSvg;
    // return <div class="fc-icon-svg-container" innerHTML={this.icon} />;

    return <img src={this.url} style={{ height: `${this.size}px`, width: `${this.size}px`, color: this.color }} />;
  }
}
