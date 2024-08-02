// Definition for a binary tree node.
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Function to build the binary tree from an array representation.
function buildTree(nodes) {
    if (!nodes || nodes.length === 0) {
        return null;
    }

    let root = new TreeNode(nodes[0]);
    let queue = [root];
    let i = 1;

    while (i < nodes.length) {
        let current = queue.shift();

        if (nodes[i] !== null) {
            current.left = new TreeNode(nodes[i]);
            queue.push(current.left);
        }
        i++;

        if (i < nodes.length && nodes[i] !== null) {
            current.right = new TreeNode(nodes[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

// Function to find the lowest common ancestor of two nodes in a binary tree.
function lowestCommonAncestor(root, p, q) {
    if (!root || root === p || root === q) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) {
        return root;
    }

    return left ? left : right;
}

//
// function lowestCommonAncestor(root, p, q) {
//     if (root === null) {
//         return null;
//     }

//     // If the current node matches either p or q, return it
//     if (root === p || root === q) {
//         return root;
//     }

//     // Recursively search in the left and right subtrees
//     const left = lowestCommonAncestor(root.left, p, q);
//     const right = lowestCommonAncestor(root.right, p, q);

//     // If p and q are found in different subtrees, return the current root as the LCA
//     if (left !== null && right !== null) {
//         return root;
//     }

//     // Otherwise, return the non-null result (either left or right)
//     return left !== null ? left : right;
// }

// Helper function to find a node by value (needed to locate p and q in the tree).
function findNode(root, val) {
    if (root === null) {
        return null;
    }

    if (root.val === val) {
        return root;
    }

    return findNode(root.left, val) || findNode(root.right, val);
}

// Sample execution:

// Example 1
let nodes = [3,5,1,6,2,0,8,null,null,7,4];
let root = buildTree(nodes);
let p = findNode(root, 5); // Node with value 5
let q = findNode(root, 1); // Node with value 1
// console.log("LCA of 5 and 1:", lowestCommonAncestor(root, p, q).val); // Output: 3

// Example 2
p = findNode(root, 5); // Node with value 5
q = findNode(root, 4); // Node with value 4
// console.log("LCA of 5 and 4:", lowestCommonAncestor(root, p, q).val); // Output: 5

// Example 3
root = buildTree(nodes);
p = findNode(root, 1); // Node with value 1
q = findNode(root, 2); // Node with value 2
console.log("LCA of 1 and 2:", lowestCommonAncestor(root, p, q).val); // Output: 1
