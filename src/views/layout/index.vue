<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="classObj.mobile && sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <!-- <sidebar class="sidebar-container" /> -->
    <div :class="{hasTagsView: showTagsView}" class="main-container">
      <div :class="{'fixed-header': fixedHeader}">
        <!-- <navbar />
        <tags-view v-if="showTagsView" /> -->
      </div>
      <!-- <app-main /> -->
      <!-- <right-panel v-if="showSettings">
        <settings />
      </right-panel> -->
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "Layout",
  components: {
  }
})
export default class extends Vue {
  get classObj() {
    return {
      hideSidebar: !this.sidebar.opened,
      openSidebar: this.sidebar.opened,
      withoutAnimation: this.sidebar.withoutAnimation,
      mobile: this.device === DeviceType.Mobile
    }
  }


  get showSettings() {
    return SettingsModule.showSettings
  }

  get showTagsView() {
    return SettingsModule.showTagsView
  }

  get fixedHeader() {
    return SettingsModule.fixedHeader
  }
}
</script>