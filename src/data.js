export const option = {
  title: {
    text: '上古官二代'
  },
  legend: {
    show: true,
    // formatter(val) {
    //   return val
    // },
    formatter: "{dot | ·} {name|{name}}",
    textStyle: {
      rich: {
        dot: {
          fontSize: 20,
          color: 'blue'
        },
        name: {
            color: 'red',
            lineHeight: 10
        },
      },
    },
    data: [
      {
        name: '1',
      },
      {
        name: '2'
      },
      {
        name: '3'
      },
      {
        name: '4'
      }
    ]
  },
  series: [
    {
      type: 'graph',
      layout: 'force',
      symbolSize: 60,
      roam: true,
      label: {
        normal: {
          show: true,
          textStyle: {
            fontSize: 18
          }
        }
      },
      force: {
        repulsion: 2000
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeLabel: {
        show: false,
        normal: {
          show: true,
          textStyle: {
            fontSize: 18
          },
          // formatter: '{c}'
        }
      },
      data: [
        {
          name: '神农',
          category: 0
        },
        {
          name: '伏羲',
          category: 1
        },
        {
          name: 'zh',
          category: 2
        },
        {
          name: 'llm',
          category: 3
        }
      ],
      links: [
        {
          source: '神农',
          target: '伏羲',
        },
        {
          source: 'zh',
          target: '伏羲',
        },
        {
          source: 'llm',
          target: '伏羲',
        }
      ],
      categories: [{name: '1'}, {name: '2'}, {name: '3'}, {name: '4'}]
    }
  ]
}
