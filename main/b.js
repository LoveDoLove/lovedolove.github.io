const createCursor = (x , y) => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.style.left = `${x}px`;
    cursor.style.right = `${y}px`;

    return cursor;
}

const removeCursorFromDom = cursor => {
    const timeout = setTimeout(() => {
        cursor.remove();
        clearTimeout(timeout);
    }, 1000)
}

window.addEventListener('click', event => {
    const cursor = createCursor(event.pageX, event.pageY);
    document.body.append(cursor);
    removeCursorFromDom(cursor);
})