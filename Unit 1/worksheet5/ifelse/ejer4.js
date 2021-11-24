/**
 * 4.-­‐    Crea    un    script    que    pregunte    al    usuario    el    número    de    hermanos    que    tiene    y    una    cantidad.    En    el    caso    
de    que    el    usuario    tenga    más    de    tres    hermanos,    se    mostrará    la    cantidad    con    un    15%    de    descuento.    Si    el    
usuario    tiene    menos    de    tres    hermanos,    se    mostrará    la    cantidad    con    un    5%    de    descuento.    Si    no    tiene    
hermanos    se    mostrará    la    cantidad    sin    descuento.   
 */
var nhermanos=parseInt(prompt('numero de hermanos: '));
var cantidad=parseInt(prompt(' cantidad: '));
(nhermanos>3)?console.log(cantidad*0.85):(nhermanos>0)?console.log(cantidad*0.95):console.log(cantidad);