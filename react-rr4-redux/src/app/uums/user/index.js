/**
 * Created by feichongzheng on 17/9/25.
 */
import React from 'react';
import Bundle from '../../bundle/views/bundle';
import load from 'bundle-loader?lazy&name=[User]!./lazy';

const view = (props) => {
    return (
        <Bundle load={load}>
            {(View) => {
                return <View {...props}/>
            }}
        </Bundle>
    );
};

export {view};