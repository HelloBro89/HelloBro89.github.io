let s = document.querySelector('#check');

let str = "Привет ?"

let blob = new Blob([str], { type: 'text/plain' })

s.href = URL.createObjectURL(blob);

// URL.revokeObjectURL(s.href);