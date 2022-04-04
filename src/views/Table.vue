<template>
  <div id="app-container">
    <DxDataGrid
      id="dataGrid"
      :data-source="data"
      :column-auto-width="true"
      :allow-column-reordering="true"
      mode="batch"
    >
      <DxEditing :allow-adding="true" />
      <DxToolbar>
        <DxItem template="collapseTemplate" />
      </DxToolbar>
      <template #collapseTemplate>
        <div>
          <div>ciao</div>
          <!-- <DxButton text="ciao" width="136" /> -->
          <!-- <{}text="ciao" width="136" /> -->
        </div>
      </template>

      <DxGrouping :auto-expand-all="expanded" />
      <DxColumn
        data-field="site.label"
        caption="PROJECT"
        sort-order="asc"
        cell-template="grid-cell"
      >
        <DxRequiredRule />
        <DxSearchPanel :visible="true" />
      </DxColumn>

      <template #grid-cell="{ data }">
        <div>
          <div style="color: blue">{{ data.data.site.label }}</div>
          <div style="color: grey">{{ data.data.seeds[0] }}</div>
        </div>
      </template>

      <DxColumn data-field="site.client" caption="OWNERS" sort-order="asc">
        <DxRequiredRule />
      </DxColumn>

      <DxColumn
        data-field="site.status"
        caption="STATUS"
        :width="100"
        sort-order="asc"
      >
        <DxRequiredRule
      /></DxColumn>

      <DxColumn data-field="scans.length" caption="NO. CRAWLS" sort-order="asc">
      </DxColumn>

      <DxColumn
        data-field="scans[0].scandate"
        caption="LAST CRAWL"
        data-type="time"
        sort-order="asc"
      >
      </DxColumn>
      <DxFilterRow :visible="true" />
      <DxEditing
        mode="popup"
        :allow-updating="true"
        :allow-adding="true"
        :allow-deleting="true"
      />
      <DxSearchPanel :visible="true" />

      <DxColumn cell-template="grid-cell-2" type="buttons"> </DxColumn>

      <template #grid-cell-2="{}">
        <div>
          <DxDropDownButton
            :items="actions"
            key-expr="id"
            display-expr="text"
            text=""
            icon="overflow"
            :drop-down-options="dropDownOptions"
          />
        </div>
      </template>
      <DxSorting mode="single" />
      <DxGrouping :auto-expand-all="expanded" />
      <DxColumnFixing :enabled="true" />
    </DxDataGrid>
  </div>
</template>

<script>
import "devextreme/dist/css/dx.light.css";
import "devextreme/dist/css/dx.common.css";
// import {DxButton}from "devextreme-vue/button";
import DxDropDownButton from "devextreme-vue/drop-down-button";
import service from "../employees.service.js";
import {
  DxDataGrid,
  DxColumn,
  DxColumnFixing,
  //   DxColumnChooser,
  DxSorting,
  DxFilterRow,
  DxSearchPanel,
  //   DxGroupPanel,
  DxRequiredRule,
  // DxEditing,
  //   DxSelection,
  DxGrouping,
  //   DxToolbar,
  //   DxItem,
  DxToolbar,
  DxItem,
  DxEditing,
} from "devextreme-vue/data-grid";

const actions = [
  { id: 1, text: "Project", icon: "folder" },
  { id: 2, text: "Reports", icon: "chart" },
  { id: 3, text: "Seo Tech", icon: "group" },
  { id: 4, text: "Delete", icon: "trash" },
];
export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxSorting,
    DxFilterRow,
    DxSearchPanel,
    DxRequiredRule,
    // DxEditing,
    DxGrouping,
    DxColumnFixing,
    DxDropDownButton,
    DxToolbar,
    DxItem,
    DxEditing,
  },

  data() {
    return {
      data: service.getDati(),
      selectedDati: undefined,
      actions,
      dropDownOptions: {
        width: 150,
      },
    };
  },
  methods: {
    showMessage() {
      console.log("The button was clicked");
    },
    selectDati(e) {
      e.component.byKey(e.currentSelectedRowKeys[0]).done((data) => {
        if (data) {
          this.selectedDati = data;
        }
      });
    },
  },
};
</script>

<style>
#dataGrid {
  height: 100%;
}
#app-container {
  width: 100%;
  position: relative;
}
#editing {
  color: red;
}
</style>
