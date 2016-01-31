
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/switch/readme.md'
                import '../../../../lib/pc/switch/demo'

                

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/switch/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/switch/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/switch/demo/lists/basic.md'
                    
                    import ControlComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/switch/demo/lists/control.js'
                    import ControlCode from 'text!../../../../lib/pc/switch/demo/lists/control.js'
                    import ControlMarkdown from '../../../../lib/pc/switch/demo/lists/control.md'
                    
                    import LabelComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/switch/demo/lists/label.js'
                    import LabelCode from 'text!../../../../lib/pc/switch/demo/lists/label.js'
                    import LabelMarkdown from '../../../../lib/pc/switch/demo/lists/label.md'
                    
                    import SizeComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/switch/demo/lists/size.js'
                    import SizeCode from 'text!../../../../lib/pc/switch/demo/lists/size.js'
                    import SizeMarkdown from '../../../../lib/pc/switch/demo/lists/size.md'
                    
                    import TypeComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/switch/demo/lists/type.js'
                    import TypeCode from 'text!../../../../lib/pc/switch/demo/lists/type.js'
                    import TypeMarkdown from '../../../../lib/pc/switch/demo/lists/type.md'
                    

                const colStyle = {
                    padding: 10
                }

                const docStyle = {
                    margin: 10,
                    background: 'white'
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {
                            page: 'demo'
                        }
                        document.title = '开关'
                    }

                    handlePageChange(value) {
                        this.setState({
                            page: value
                        })
                    }

                    render() {
                        let Content = null

                        switch (this.state.page) {
                        case 'demo':
                            Content = (
                                <Row>
                                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={BasicMarkdown} code={BasicCode}>
                            <BasicComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={ControlMarkdown} code={ControlCode}>
                            <ControlComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={LabelMarkdown} code={LabelCode}>
                            <LabelComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={SizeMarkdown} code={SizeCode}>
                            <SizeComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={TypeMarkdown} code={TypeCode}>
                            <TypeComponent/>
                        </CodeView>
                    </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                                </div>
                            )
                            break
                        }

                        return (
                            <div className="_namespace">
                                <Layout>
                                    <Header>
                                        <Title gitlabUrl="http://gitlab.baidu.com/tb-component/pc-switch/tree/master"
                                               onChange={this.handlePageChange.bind(this)}>{readme}</Title>
                                    </Header>

                                    <Section>
                                        {Content}
                                    </Section>
                                    <Sidebar direction="right"
                                             width="120">
                                        5555555
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                