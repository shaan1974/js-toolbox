function base64ToArrayBuffer(base64)
{
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));
    for (i = 0; i < rawLength; i++)
    {
        array[i] = raw.charCodeAt(i);
    }
    return (array.buffer);
}