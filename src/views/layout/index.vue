<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="classObj.mobile && sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <!-- <sidebar class="sidebar-container" /> -->
    <div :class="{hasTagsView: showTagsView}" class="main-container">
      <div :class="{'fixed-header': fixedHeader}">
        <!-- <navbar />
        <tags-view v-if="showTagsView" /> -->
      </div>
      <app-main />
      <!-- <right-panel v-if="showSettings">
        <settings />
      </right-panel> -->
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {DeviceType} from '@/store/modules/app';
@Component({
  name: 'Layout',
  components: {
      appMain
  },
})
export default class extends Vue {
  get classObj() {
    return {
      hideSidebar: !this.$store.state.app.sidebar.opened,
      openSidebar: this.$store.state.app.sidebar.opened,
      withoutAnimation: this.$store.state.app.sidebar.withoutAnimation,
      mobile: this.$store.state.app.device === DeviceType.Mobile,
    };
  }
  // 这里get 相当于原生的计算属性
  get showSettings() {
    return this.$store.state.Settings.showSettings;
  }

  get showTagsView() {
    return this.$store.state.Settings.showTagsView;
  }

  get fixedHeader() {
    return this.$store.state.Settings.fixedHeader;
  }
}
</script>