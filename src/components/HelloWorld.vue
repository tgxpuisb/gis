<template>
    <Tree :data="data5" :render="renderContent" class="tree"></Tree>
</template>
<script>

const father = (h, { root, node, data }) => {
                          var self = this
                            return h('span', {
                                style: {
                                    display: 'inline-block',
                                    width: '100%'
                                }
                            }, [
                                h('span', [
                                    h('Icon', {
                                        props: {
                                            type: 'ios-folder-outline'
                                        },
                                        style: {
                                            marginRight: '8px'
                                        }
                                    }),
                                    h('span', data.title)
                                ]),
                                h('span', {
                                    style: {
                                        display: 'inline-block',
                                        float: 'right',
                                        marginRight: '32px'
                                    }
                                }, [
                                    h('Button', {
                                        props: Object.assign({}, this.buttonProps, {
                                            icon: 'ios-plus-empty',
                                            type: 'primary'
                                        }),
                                        style: {
                                            width: '52px'
                                        },
                                        on: {
                                            click: () => { this.append(data) }
                                        }
                                    })
                                ])
                            ]);
                        }




    export default {
        data () {
            return {
                red: '#FF0000',
                green: '#00FF00',
                isRed: true,
                data5: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'child 1-1',
                                isSelected: false,
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        isSelected: false,
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        isSelected: false,
                                        expand: true
                                    }
                                ]
                            },
                            {
                                title: 'child 1-2',
                                isSelected: false,
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        isSelected: false,
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        isSelected: false,
                                        expand: true
                                    }
                                ]
                            }
                        ]
                    }
                ],
                buttonProps: {
                    type: 'ghost',
                    size: 'small',
                }
            }
        },
        mounted () {


          setTimeout(() => {
            const realData = [
              {
                title: 't1',
                pid: 0,
                id: 1,
                name: 't1',
                children: [
                  {
                    title: 't1-1',
                    pid: 1,
                    id: 5,
                    name: 't2-1'
                  }
                ]
              },
              {
                title: 't2',
                pid: 0,
                id: 2,
                name: 't2',
                children: [
                  {
                    title: 't2-1',
                    pid: 2,
                    id: 3,
                    name: 't2-1'
                  },
                  {
                    title: 't2-2',
                    pid: 2,
                    id: 4,
                    name: 't2-2'
                  }
                ]
              }
            ]
            realData.forEach(data => {
              data.children.forEach(child => {
                child.render = father
              }) 
            })
            this.data5 = realData
          }, 2000)
        },
        methods: {
            renderContent (h, { root, node, data }) {
                return h('span', {
                    style: {
                        display: 'inline-block',
                        width: '100%'
                    }
                }, [
                    h('span', {
                      style: {
                        backgroundColor: data.isSelected ? '#F00' : undefined
                      },
                      on: {
                        click: () => {
                          // console.log(arguments[1].data)
                          data.isSelected = true
                          console.log(data)
                          this.data5[0].children.forEach(v => {
                            
                          })
                        }
                      }
                    }, [
                        h('Icon', {
                            props: {
                                type: 'ios-paper-outline'
                            },
                            style: {
                                marginRight: '8px'
                            }
                        }),
                        h('span', data.title)
                    ]),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '32px'
                        }
                    }, [
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-plus-empty'
                            }),
                            style: {
                                marginRight: '8px'
                            },
                            on: {
                                click: () => { this.append(data) }
                            }
                        }),
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-minus-empty'
                            }),
                            on: {
                                click: () => { this.remove(root, node, data) }
                            }
                        })
                    ])
                ]);
            },
            append (data) {
                const children = data.children || [];
                children.push({
                    title: 'appended node',
                    expand: true
                });
                this.$set(data, 'children', children);
            },
            remove (root, node, data) {
                const parentKey = root.find(el => el === node).parent;
                const parent = root.find(el => el.nodeKey === parentKey).node;
                const index = parent.children.indexOf(data);
                parent.children.splice(index, 1);
            }
        }
    }
</script>

<style>
 .tree {
   width: 200px;
 }
</style>

