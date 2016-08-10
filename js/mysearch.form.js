/**
 * Created by enzo on 8/10/16.
 */
var Search = React.createClass({

    render: function(){
        return (
            React.createElement('form', {onSubmit: this.onSubmit, className: 'SearchForm', noValidate: true},
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Search'
                }),
                React.createElement("select", { placeholder: 'Category', value: '', onChange: this.changeHandler },
                    React.createElement("option", { value: 1 }, "Software"),
                    React.createElement("option", { value: 2 }, "Movie")
                ),
                React.createElement('button', {type: 'submit'}, "Go")
            )
        );
    },
});

ReactDOM.render(React.createElement(Search),  document.getElementById("content"));