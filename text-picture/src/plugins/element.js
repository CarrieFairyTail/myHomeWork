import Vue from 'vue'
import {
  Aside,
  Button,
  ButtonGroup,
  Carousel,
  CarouselItem,
  Card,
  Collapse,
  CollapseItem,
  Dialog,
  Header,
  Main,
  Container,
  Input,
  Upload,
  DatePicker,
  Tooltip,
  Form,
  FormItem,
  Message,
  Loading,
  TabPane,
  Table,
  TableColumn,
  Tabs,
  Tag,
  Select,
  Switch,
  Option,
  Radio,
  RadioGroup,
  Footer,
  Row,
  Col,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Pagination,
  Menu,
  MenuItem,
  MessageBox,
  Divider,
  Breadcrumb,
  BreadcrumbItem
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Aside)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Card)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Dialog)
Vue.use(Header)
Vue.use(Main)
Vue.use(Container)
Vue.use(Input)
Vue.use(Upload)
Vue.use(DatePicker)
Vue.use(Tooltip)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tabs)
Vue.use(Tag)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Option)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Footer)
Vue.use(Row)
Vue.use(Col)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Pagination)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Divider) // 下划线
Vue.use(Breadcrumb) // 面包屑导航
Vue.use(BreadcrumbItem)

Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
