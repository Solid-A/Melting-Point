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
  
    // معادلة حساب درجة حرارة الانصهار (قيمة تقريبية استناداً إلى المواد)
    // let meltingPoint = 
    //   silica * 1713 + 
    //   quartz * 1670 +
    //   potassiumFeldspar * 1150 + 
    //   sodiumFeldspar * 1115 + 
    //   calciumFeldspar * 1550 + 
    //   calciumCarbonate * 1200 + 
    //   sodiumCarbonate * 1584 + 
    //   potassiumCarbonate * 1200 + 
    //   aluminiumOxide * 2072 + 
    //   bariumCarbonate * 1360 + 
    //   dolomite * 1600 + 
    //   colemanite * 1050 + 
    //   zincOxide * 1975 + 
    //   zirconiumSilicate * 2550 + 
    //   zirconiumOxide * 2700 + 
    //   titaniumDioxide * 1843 + 
    //   borax * 1365 + 
    //   sillimanite * 1545 + 
    //   mullite * 1840 + 
    //   kaolin * 1830;

    let meltingPoint = 
      silica * 1713 + 
      quartz * 1670 +
      potassiumFeldspar * 1250 + 
      sodiumFeldspar * 1150 + 
      calciumFeldspar * 1550 + 
      calciumCarbonate * 825 + 
      sodiumCarbonate * 1584 + 
      potassiumCarbonate * 1200 + 
      aluminiumOxide * 2072 + 
      bariumCarbonate * 1360 + 
      dolomite * 900 + 
      colemanite * 900 + 
      zincOxide * 1975 + 
      zirconiumSilicate * 2550 + 
      zirconiumOxide * 2715 + 
      titaniumDioxide * 1843 + 
      borax * 750 + 
      sillimanite * 1545 + 
      mullite * 1840 + 
      kaolin * 1100;
  
      // يمكن أن تضيف حساب الوزن الإجمالي هنا إذا أردت
      let totalWeight = 
        silica + quartz + potassiumFeldspar + sodiumFeldspar + calciumFeldspar +
        calciumCarbonate + sodiumCarbonate + potassiumCarbonate + aluminiumOxide +
        bariumCarbonate + dolomite + colemanite + zincOxide + zirconiumSilicate +
        zirconiumOxide + titaniumDioxide + borax + sillimanite + mullite + kaolin;
    
      document.getElementById("outer2").textContent = totalWeight.toFixed(1) + " kg";

    // إذا لم يتم إدخال أي مواد
    if (meltingPoint === 0) {
      meltingPoint = "No materials entered";
    } else {
      meltingPoint = (meltingPoint / totalWeight).toFixed(0); // لحساب المتوسط
    }
  
    // عرض النتيجة
    document.getElementById("outer").textContent = meltingPoint + " \u00B0c";
    
  });
  
