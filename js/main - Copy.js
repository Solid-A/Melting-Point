document.querySelector("button").addEventListener("click", function () {
    // استدعاء القيم المدخلة
    const silica = parseFloat(document.getElementById("silica").value) || 0;
    const quartz = parseFloat(document.getElementById("quartz").value) || 0;
    const potassiumFeldspar = parseFloat(document.getElementById("po-feld").value) || 0;
    const sodiumFeldspar = parseFloat(document.getElementById("so-feld").value) || 0;
    const calciumFeldspar = parseFloat(document.getElementById("ca-feld").value) || 0;
    const calciumCarbonate = parseFloat(document.getElementById("ca-ca").value) || 0;
    const sodiumCarbonate = parseFloat(document.getElementById("so-ca").value) || 0;
    const potassiumCarbonate = parseFloat(document.getElementById("po-ca").value) || 0;
    const aluminiumOxide = parseFloat(document.getElementById("alu").value) || 0;
    const bariumCarbonate = parseFloat(document.getElementById("bar").value) || 0;
    const dolomite = parseFloat(document.getElementById("dolo").value) || 0;
    const colemanite = parseFloat(document.getElementById("cole").value) || 0;
    const zincOxide = parseFloat(document.getElementById("zin").value) || 0;
    const zirconiumSilicate = parseFloat(document.getElementById("zir-s").value) || 0;
    const zirconiumOxide = parseFloat(document.getElementById("zir-o").value) || 0;
    const titaniumDioxide = parseFloat(document.getElementById("tita").value) || 0;
    const borax = parseFloat(document.getElementById("bor").value) || 0;
    const sillimanite = parseFloat(document.getElementById("silli").value) || 0;
    const mullite = parseFloat(document.getElementById("mulli").value) || 0;
    const kaolin = parseFloat(document.getElementById("kao").value) || 0;

    // استدعاء المعادلات
    // يمكن أن تضيف حساب الوزن الإجمالي هنا إذا أردت
    let totalWeight = 
      silica + quartz + potassiumFeldspar + sodiumFeldspar + calciumFeldspar +
      calciumCarbonate + sodiumCarbonate + potassiumCarbonate + aluminiumOxide +
      bariumCarbonate + dolomite + colemanite + zincOxide + zirconiumSilicate +
      zirconiumOxide + titaniumDioxide + borax + sillimanite + mullite + kaolin;
  
      document.getElementById("outer2").textContent = totalWeight.toFixed(1) + " kg";

    // معادلة حساب درجة حرارة الانصهار (قيمة تقريبية استناداً إلى المواد)
    let meltingPoint = 
      (silica / totalWeight) * 1713 + 
      (quartz / totalWeight) * 1670 +
      (potassiumFeldspar / totalWeight) * 1150 + 
      (sodiumFeldspar / totalWeight) * 1115 + 
      (calciumFeldspar / totalWeight)* 1550 + 
      (calciumCarbonate / totalWeight)* 825 + 
      (sodiumCarbonate / totalWeight)* 851 + 
      (potassiumCarbonate / totalWeight)* 891 + 
      (aluminiumOxide / totalWeight)* 2072 + 
      (bariumCarbonate / totalWeight)* 1360 + 
      (dolomite / totalWeight)* 1600 + 
      (colemanite / totalWeight)* 742 + 
      (zincOxide / totalWeight)* 1975 + 
      (zirconiumSilicate / totalWeight)* 2550 + 
      (zirconiumOxide / totalWeight)* 2700 + 
      (titaniumDioxide / totalWeight)* 1843 + 
      (borax / totalWeight)* 743 + 
      (sillimanite / totalWeight)* 1545 + 
      (mullite / totalWeight)* 1840 + 
      (kaolin / totalWeight)* 1830;
  
    

    // إذا لم يتم إدخال أي مواد
    if (meltingPoint === 0) {
      meltingPoint = "No materials entered";
    } else {
      meltingPoint = meltingPoint.toFixed(0); // لحساب المتوسط
    }
  
    // عرض النتيجة
    document.getElementById("outer").textContent = meltingPoint + " \u00B0c";
    
  });
  