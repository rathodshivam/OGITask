import React, { Component } from 'react';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import { Icon, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import KeyboardEventHandler from 'react-keyboard-event-handler';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentEventList: [],
            data: [
                {
                    id: 1,
                    title: "Top level 1",
                    slug: "top-level-1",
                    children: [
                        {
                            id: 'a1',
                            childId: 1,
                            title: "Top level 1",
                            slug: "top-level-1",
                            children: []
                        }
                    ]
                }
            ]
        }
    }

    add() {
        // this.currentBulletList = this.state.currentBulletList.push({ id: this.state.currentBulletList.length + 1 });
        // this.setState({
        //     currentBulletList: this.state.currentBulletList
        // })
        let obj = { id: this.state.data.length + 1, slug: 'fa', title: 'dsafs', children: [] };
        let data = [];
        data = this.state.data;
        data.push(obj);
        this.setState({
            data: data
        })
    }

    handleKeyPress = (event, obj, upperNode) => {
        if (event === 'tab') {
            // if (position === 1) {
            //     this.state.currentBulletList.map((item, index) => { id: this.state.currentBulletList.length + 1 });
            //     this.setState({
            //         currentBulletList: this.state.currentBulletList
            //     })
            // }
            console.log(this.state.data);
            this.changeNode(this.state.data, obj, upperNode);
        }
    }

    changeNode = (data, obj, upperNode) => {
        data.map((m, i) => {
            console.log(i, m);
            this.changeNode(m.children, obj, m);
        })
    }


    space = (node) => {
        for (var i = 0, count = node.innerList.length; i < count; i++) {
            this.space(node.innerList[i]);
        }
    }


    renderBookmarks(root) {
        // if (root.children) {
        //     return (
        //         <div>
        //             <strong>{root.name}</strong>
        //             <ul>
        //                 {root.children.map((c) => (
        //                     <li>
        //                         <KeyboardEventHandler
        //                             handleKeys={['all']}
        //                             onKeyEvent={(e) => { this.handleKeyPress(e, 1) }} >
        //                             <TextField
        //                                 id="standard-multiline-flexible"
        //                                 multiline
        //                                 rowsMax="4"
        //                                 size="small"
        //                                 variant="outlined"
        //                             />
        //                         </KeyboardEventHandler>
        //                         <br />
        //                         {this.renderBookmarks(c)}
        //                     </li>
        //                 ))
        //                 }
        //             </ul>
        //         </div>
        //     );
        // }
        // else {
        //     return <li>
        //         <KeyboardEventHandler
        //             handleKeys={['all']}
        //             onKeyEvent={(e) => { this.handleKeyPress(e, root, 1) }} >
        //             <TextField
        //                 id="standard-multiline-flexible"
        //                 multiline
        //                 rowsMax="4"
        //                 size="small"
        //                 label="secound"
        //                 variant="outlined"
        //             />
        //         </KeyboardEventHandler>
        //         <br />
        //     </li>;
        // }

        // if (root.children) {
        //     return (
        //         <div>
        //             <strong>{root.name}</strong>
        //             <ul>
        //                 {root.children.map(c => (<li key={c.id}>{
        //                     this.renderBookmarks(c)
        //                 } </li>))}
        //             </ul>
        //         </div>
        //     );
        // }
        // else {
        //     return <a href={root.url}> {root.name} </a>;
        // }
    }



    // element = (currentBulletList) => {
    //     return (
    //         currentBulletList.map((item, index) => {
    //             console.log('len', currentBulletList.length);

    //             if (item.innerList && item.innerList.length > 0) {
    //                 return (
    //                     <div>
    //                         <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    //                         <img src={require('../assets/img/dot.svg')} width={12} />
    //                         <KeyboardEventHandler
    //                             handleKeys={['all']}
    //                             onKeyEvent={(e) => { this.handleKeyPress(e, item, 2) }} >
    //                             <TextField
    //                                 id="standard-multiline-flexible"
    //                                 multiline
    //                                 rowsMax="4"
    //                                 size="small"
    //                                 variant="outlined"
    //                             />
    //                         </KeyboardEventHandler>
    //                         <br />
    //                         {/* {this.element(item)}  */}
    //                     </div>
    //                 )
    //             } else {
    //                 return (
    //                     <div>
    //                         <img src={require('../assets/img/dot.svg')} width={12} />
    //                         <KeyboardEventHandler
    //                             handleKeys={['all']}
    //                             onKeyEvent={(e) => { this.handleKeyPress(e, currentBulletList, 1) }} >
    //                             <TextField
    //                                 id="standard-multiline-flexible"
    //                                 multiline
    //                                 rowsMax="4"
    //                                 size="small"
    //                                 label="secound"
    //                                 variant="outlined"
    //                             />
    //                         </KeyboardEventHandler>
    //                         <br />
    //                     </div>
    //                 )
    //             }
    //         })
    //     )
    // }


    render() {

        const Menu = ({ data }) => {
            return (
                <ul style={{ 'list-style-type': 'none !important' }}>
                    {data.map(m => {
                        return (
                            <div>
                                <li type="disc" style={{ 'list-style-type': 'none' }}>
                                    <Tooltip title="Add node" arrow>
                                        <Icon style={{ marginTop: 14, marginLeft: 10, marginRight: 10, cursor: 'pointer' }}>adjust</Icon>
                                    </Tooltip>
                                    <KeyboardEventHandler
                                        handleKeys={['all']}
                                        onKeyEvent={(e) => { this.handleKeyPress(e, m, data) }} >
                                        <TextField
                                            id="standard-multiline-flexible"
                                            multiline
                                            rowsMax="4"
                                            size="small"
                                            variant="outlined"
                                            style={{ width: '80%', marginBottom: 10 }}
                                        />
                                    </KeyboardEventHandler>
                                    <Tooltip title="More" arrow>
                                        <Icon style={{ marginTop: 14, marginLeft: 10, cursor: 'pointer' }}>more_verti</Icon>
                                    </Tooltip>
                                    {m.children && <Menu data={m.children} />}
                                </li>
                            </div>
                        );
                    })}
                </ul>
            );
        }

        return (
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                    <div>
                        <Tooltip title="More" arrow>
                            <Icon style={{ marginTop: 14, marginLeft: 10, cursor: 'pointer' }}>more_verti</Icon>
                        </Tooltip>
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            rowsMax="4"
                            style={{ width: '80%' }}
                            variant="outlined"
                        />
                        <Tooltip title="Bookmark" arrow>
                            <Icon style={{ marginTop: 14, marginLeft: 10, cursor: 'pointer' }}>star_border_outline</Icon>
                        </Tooltip>
                    </div>
                    <div>
                        {<Menu data={this.state.data} />}
                    </div>
                    <br />
                    <div>
                        <Tooltip title="Add Node" arrow>
                            <Icon className="fa fa-plus-circle" style={{ cursor: 'pointer', marginLeft: 12 }} onClick={() => { this.add() }} />
                        </Tooltip>
                    </div>
                </GridItem>
            </GridContainer >
        )
    }
}

export default Dashboard;


