$(function(){
	//alert();
	
	$('th').each( function(i) {
		$(this).html('<button data-index="'+i+'" class="sorting">'+$(this).text()+'</button>');
	});
	
	$('.sorting').click(function(){
		var table = $('table');
		var index=$(this).data('index');
		this.asc = !this.asc
		if (!this.asc){
			var rows = table.find('tr:gt(0)').toArray().sort(compare_asc($(this).index()));
		}else{
			var rows = table.find('tr:gt(0)').toArray().sort(compare_desc($(this).index()));
		}
		for (var i = 0; i < rows.length; i++){table.append(rows[i])}
	})
	
	function compare_asc(index) {
		return function(a, b) {
			var valA = getCellValue(a, index), valB = getCellValue(b, index)
			return  valA.localeCompare(valB)
		}
	}

	function compare_desc(index) {
		return function(a, b) {
			var valA = getCellValue(a, index), valB = getCellValue(b, index)
			return  valB.localeCompare(valA)
		}
	}

	function getCellValue(row, index){ return $(row).children('td').eq(index).html() }


})