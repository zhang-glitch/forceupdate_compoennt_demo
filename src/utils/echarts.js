import * as echarts from 'echarts/core';

import {
  GraphChart,
  LinesChart 
} from 'echarts/charts';

import { 
    TooltipComponent, 
    LegendComponent, 
    GridComponent,
    TitleComponent,
    ToolboxComponent,
    MarkLineComponent 
} from 'echarts/components';

import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  GraphChart,
  CanvasRenderer,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TitleComponent,
  ToolboxComponent,
  MarkLineComponent,LinesChart 
]);


export default echarts;