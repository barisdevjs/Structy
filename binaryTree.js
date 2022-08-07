const areEqual = (root1, root2) => {
 // check if root1 and root2 are equal
    if (root1 === null && root2 === null) {
        return true;
    }
    if (root1 === null || root2 === null) {
        return false;
    }
    if (root1.value !== root2.value) {
        return false;
    }
    return areEqual(root1.left, root2.left) && areEqual(root1.right, root2.right);
}

const isEqual = (root) => {
    if (root === null) {
        return true;
    }
    return areEqual(root.left, root.right);
}
