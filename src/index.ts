import { html, css, LitElement, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * A Lantern Component
 */
@customElement('lantern-element')
export class LanternElement extends LitElement {
  static styles = css`
  
  @media only screen and (max-width: 768px) {
    .moblieNo{
      display: none;
    }
  }

  .lantern-box0 {
    position: fixed;
    top: -40px;
    right: -20px;
    z-index: 999;
  }
   
  .lantern-box1 {
    position: fixed;
    top: -30px;
    right: 10px;
    z-index: 999;
  }
   
  .push-left {
    right: auto;
    float: left;
  }
  .lantern-box1 .lantern {
    position: relative;
    width: 120px;
    height: 90px;
    margin: 50px;
    background: #d8000f;
    background: rgba(216, 0, 15, 0.8);
    border-radius: 50% 50%;
    -webkit-transform-origin: 50% -100px;
    -webkit-animation: swing 5s infinite ease-in-out;
    box-shadow: -5px 5px 30px 4px rgba(252, 144, 61, 1);
  }
   
  .lantern {
    position: relative;
    width: 120px;
    height: 90px;
    margin: 50px;
    background: #d8000f;
    background: rgba(216, 0, 15, 0.8);
    border-radius: 50% 50%;
    -webkit-transform-origin: 50% -100px;
    -webkit-animation: swing 3s infinite ease-in-out;
    box-shadow: -5px 5px 50px 4px rgba(250, 108, 0, 1);
  }
   
  .lantern-a {
    width: 100px;
    height: 90px;
    background: #d8000f;
    background: rgba(216, 0, 15, 0.1);
    margin: 12px 8px 8px 10px;
    border-radius: 50% 50%;
    border: 2px solid #dc8f03;
  }
   
  .lantern-b {
    width: 45px;
    height: 90px;
    background: #d8000f;
    background: rgba(216, 0, 15, 0.1);
    margin: -4px 8px 8px 26px;
    border-radius: 50% 50%;
    border: 2px solid #dc8f03;
  }
   
  .xian {
    position: absolute;
    top: -20px;
    left: 60px;
    width: 2px;
    height: 20px;
    background: #dc8f03;
  }
   
  .shui-a {
    position: relative;
    width: 5px;
    height: 20px;
    margin: -5px 0 0 59px;
    -webkit-animation: swing 4s infinite ease-in-out;
    -webkit-transform-origin: 50% -45px;
    background: #ffa500;
    border-radius: 0 0 5px 5px;
  }
   
  .shui-b {
    position: absolute;
    top: 14px;
    left: -2px;
    width: 10px;
    height: 10px;
    background: #dc8f03;
    border-radius: 50%;
  }
   
  .shui-c {
    position: absolute;
    top: 18px;
    left: -2px;
    width: 10px;
    height: 35px;
    background: #ffa500;
    border-radius: 0 0 0 5px;
  }
   
  .lantern:before {
    position: absolute;
    top: -7px;
    left: 29px;
    height: 12px;
    width: 60px;
    content: " ";
    display: block;
    z-index: 999;
    border-radius: 5px 5px 0 0;
    border: solid 1px #dc8f03;
    background: #ffa500;
    background: linear-gradient(to right, #dc8f03, #ffa500, #dc8f03, #ffa500, #dc8f03);
  }
   
  .lantern:after {
    position: absolute;
    bottom: -7px;
    left: 10px;
    height: 12px;
    width: 60px;
    content: " ";
    display: block;
    margin-left: 20px;
    border-radius: 0 0 5px 5px;
    border: solid 1px #dc8f03;
    background: #ffa500;
    background: linear-gradient(to right, #dc8f03, #ffa500, #dc8f03, #ffa500, #dc8f03);
  }
   
  .lantern-t {
    font-family: ????????????,Arial,Lucida Grande,Tahoma,sans-serif;
    font-size: 3.2rem;
    color: #dc8f03;
    font-weight: bold;
    line-height: 85px;
    text-align: center;
  }
   
  .night .lantern-t, 
  .night .lantern-box0, 
  .night .lantern-box1 {
    background: transparent !important;
  }
   
  @-moz-keyframes swing {
    0% {
      -moz-transform: rotate(-10deg)
    }
   
    50% {
      -moz-transform: rotate(10deg)
    }
   
    100% {
      -moz-transform: rotate(-10deg)
    }
  }
   
  @-webkit-keyframes swing {
    0% {
      -webkit-transform: rotate(-10deg)
    }
   
    50% {
      -webkit-transform: rotate(10deg)
    }
   
    100% {
      -webkit-transform: rotate(-10deg)
    }
  }
  `

  /**
   * The text on lantern???use `,` to divide the text
   */
  @property({type: String})
  text = '???,???'

  /**
   * The number of lanterns returned, up to 2
   */
  @property({type: Number})
  number = 2

  /**
   * display on moblie (very not recommended)
   */
  @property({type: Boolean})
   displayMobile = false;

  /**
   * Whether to display left or right; otherwise, the output will be based on the 'position' field
   */
  @property({type: Boolean})
  disPlayBoth = false

  /**
   * The position of the lantern, left or right
   */
  @property({type: String})
  position = 'right'

  private loopRender(i:number,position: string){
      return html`
      <div class="lantern-box${i} ${"push-" + position} ${this.displayMobile ? '': 'moblieNo'}">
      <div class="lantern">
          <div class="xian"></div>
          <div class="lantern-a">
              <div class="lantern-b">
                  <div class="lantern-t">${this.sliceName()[i]}</div>
              </div>
          </div>
          <div class="shui shui-a">
              <div class="shui-c"></div>
              <div class="shui-b"></div>
          </div>
        </div>
      </div>
      `
    }

  private sliceName(){
    return this.text.split(',')
  }

  render() {
    let a: TemplateResult<1>[] = new Array(this.number)
    if (this.disPlayBoth) {
      for (let i = 0; i < this.number; i++) {
        a[i] = this.loopRender(i, "left") // TemplateResult<1>
      }
      for (let i = 0; i < this.number; i++) {
        a[i+2] = this.loopRender(i,"right") // TemplateResult<1>
      }
    }else{
      for (let i = 0; i < this.number; i++) {
        a[i] = this.loopRender(i, this.position) // TemplateResult<1>
      }
    }
    return html`
      ${a}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lantern-element': LanternElement
  }
}
