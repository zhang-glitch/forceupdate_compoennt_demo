动态组件
业务需求是这样的，最开始需求是一个tabs切换展示不同内容。为了方便我们循环去配合component去实现。这样省力。
js复制代码<component :is="item.component" :key="item.id"></component>

const tabs = [
  {
    id: "1",
    title: "zh1",
    component: Example1,
  },
  {
    id: "2",
    title: "zh2",
    component: Example2,
  },
  {
    id: "3",
    title: "zh3",
    component: Example3,
  },
  {
    id: "4",
    title: "zh4",
    component: Example4,
  },
];


但是做完后，产品说新加一个分配项目的功能。当点击进入项目详情，也就是这个tabs切换页面时，如果项目未分配，我们需要先分配项目，然后才可以操作项目。于是我们就在动态组件中加上了v-show / v-if去做这种操作。
js复制代码<component :is="item.component" :key="item.id" v-show="!isDisabled"></component>
<div v-show="isDisabled">
    待分配 
    <br>
    <button @click="handlebtn">按钮</button>
</div>



当我们做完后，产品又说了我们希望第二个tab在没有分配项目的时候也可以让用户点击。这个问题就很棘手了。我们只能在动态组件外层做判断，不能深入到内部做判断啊。于是我们就把动态组件换成了普通的v-if / v-show去做这种tabs切换。

虽然可以限制tabs-item的点击状态，但是我们是在外层做统一的判断，所以我们点击第二个tab，也不会显示组件本身，而是分配按钮组件。
如果有这种需求的同志们，不要使用动态组件去开发，这样会避免一些不必要的麻烦。
js复制代码<TabPane
  v-for="item in tabs"
  :key="item.id"
  :tab="item.title"
  :disabled="isDisabled && item.id != '1' && item.id != '2'"
>
  <component :is="item.component" :key="item.id" v-show="!isDisabled" ></component>

  <div v-show="isDisabled">
    待分配 
    <br>
    <button @click="handlebtn">按钮</button>
  </div>
</TabPane>

v-show，导致子组件高度渲染有问题，echarts图表展示有问题
依旧是tabs，只不过这个是移动端。当我们使用v-show去控制tabs内容的展示时，由于使用的是v-show，他会加载组件，但是disabled: none, 导致echarts初始化，拿到父元素的宽高为0。导致图像渲染有问题。这个问题也很离奇。因为我们在外层父元素设置的宽度是100%，v-show导致在图标渲染时，父级宽高为0，所以应该不展示才对。但是他会出现默认的100px x 100px。
解决办法

把外层v-show换成v-if，让切换时组件重新加载即可。
直接设置父元素宽高固定值。注意由于是移动端，我们需要动态计算宽度。所以需要使用calc()。
或者在使用组件的地方加上key，绑定activeKey，当切换tabs时，强制重新组件。vue中的diff算法比对key时，不一样就会重新渲染该组件。
或者监听tabs的切换，然后调用组件的$forceUpdate方法，强制组件的重新加载。


v-if "正确"的使用
今天写移动端时，遇见了这样一个问题，就是我们通过props向子组件传递一个id，在子组件中通过watch监听id变化，然后请求详情接口，做表单编辑回写数据。当用户不想编辑了，点击popup以外的元素关闭popup，我们需要清空表单，防止用户点击添加后，有原来的旧数据，体验不是很好。
我们就监听popup关闭事件，将表单数据重置。但是这样的话，我们再次点击相同的项目时，由于id相同watch是不会重新触发的，以至于不能回写数据。所以这时候我们就需要强制组件重新加载渲染。所以我们就可以在组件中使用v-if绑定popup的显隐值。

作者：Spirited_Away
链接：https://juejin.cn/post/7270445774323351586
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
