import { Component, Vue, Watch } from 'vue-property-decorator';
import {  DeviceType } from '@/store/modules/app';

const WIDTH = 992; // refer to Bootstrap's responsive design

@Component({
  name: 'ResizeMixin',
})

export default class extends Vue {
  get device() {
    return this.$store.state.app.device;
  }

  get sidebar() {
    return this.$store.state.app.sidebar;
  }

  public beforeMount() {
    window.addEventListener('resize', this.resizeHandler);
  }

  public mounted() {
    const isMobile = this.isMobile();
    if (isMobile) {
    //   AppModule.ToggleDevice(DeviceType.Mobile);
    //   AppModule.CloseSideBar(true);
    }
  }

  public beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  @Watch('$route')
  private onRouteChange() {
    if (this.device === DeviceType.Mobile && this.sidebar.opened) {
    //   AppModule.CloseSideBar(false);
    }
  }

  private isMobile() {
    const rect = document.body.getBoundingClientRect();
    return rect.width - 1 < WIDTH;
  }

  private resizeHandler() {
    if (!document.hidden) {
      const isMobile = this.isMobile();
        // AppModule.ToggleDevice(isMobile ? DeviceType.Mobile : DeviceType.Desktop);
      if (isMobile) {
        // AppModule.CloseSideBar(true);
      }
    }
  }
}
