module.exports.rules = { 
    "name-rule": function(context) {
      return {
          Identifier(node) {
            if (node.name === "name") {
                context.report(
                    node,
                    'name is only string type');
            }
       }
        
        }
    }
};
