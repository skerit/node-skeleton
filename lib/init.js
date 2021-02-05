let NodeSkeleton,
    options;

// Get an existing Protoblast instance or create a new one
if (typeof __Protoblast != 'undefined') {
	Blast = __Protoblast;
} else {
	Blast = require('protoblast')(false);
}

// Get the NodeSkeleton namespace
NodeSkeleton = Blast.Bound.Function.getNamespace('Elevenways.NodeSkeleton');

// Set the argument info
Blast.arguments.NodeSkeleton = {
	names  : ['NodeSkeleton', 'Blast', 'Bound',      'Classes',      'Fn'],
	values : [ NodeSkeleton,   Blast,   Blast.Bound,  Blast.Classes,  Blast.Collection.Function]
};

options = {

	// The directory to start looking in
	pwd        : __dirname,

	// Do not allow it to be added to the client-side
	client     : false,

	// The argument configuration to use for the wrapper function
	arguments  : 'NodeSkeleton'
};

Blast.requireAll([
	//['base'],
], options);

// Export the Vrtnu namespace
module.exports = Harp;