var formFieldTemplate = '<label for="{code}" class="col-sm-4 control-label">{name}:</label>\
    <div class="col-sm-8">\
        <input type="number" class="form-control" id="{code}" name="{code}" placeholder="{placeholder}">\
    </div>\
';
var formFieldDebugTemplate = '<div class="debug-info hidden">\
    <div class="col-sm-6">Значение коэффициента для группы:</div>\
    <div class="col-sm-2"><span class="label label-success">{group1}</span></div>\
    <div class="col-sm-2"><span class="label label-primary">{group2}</span></div>\
    <div class="col-sm-2"><span class="label label-warning">{group3}</span></div>\
    <div class="col-sm-6">Промежуточное значение:</div>\
    <div class="col-sm-2"><span class="label label-success group1delta"> </span></div>\
    <div class="col-sm-2"><span class="label label-primary group2delta"> </span></div>\
    <div class="col-sm-2"><span class="label label-warning group3delta"> </span></div>\
    <div class="col-sm-6">Общий подъитог по группам:</div>\
    <div class="col-sm-2"><span class="label label-success group1value"> </span></div>\
    <div class="col-sm-2"><span class="label label-primary group2value"> </span></div>\
    <div class="col-sm-2"><span class="label label-warning group3value"> </span></div>\
</div>\
';

var inputFieldsData = {
    "field1" : {"code" : "field1", "name" : "Фибриноген", "placeholder" : "(г/л)", "group1" : 7.59, "group2" : 6.93, "group3" : 5.86},
    "field2" : {"code" : "field2", "name" : "ПТИ", "placeholder" : "протромбиновый индекс (%)", "group1" : 3.29, "group2" : 3.24, "group3" : 3.24},
    "field3" : {"code" : "field3", "name" : "АТIII", "placeholder" : "антитромбин III (%)", "group1" : 0.54, "group2" : 0.58, "group3" : 0.6},
    "field4" : {"code" : "field4", "name" : "D-димер", "placeholder" : "(нг/мл)", "group1" : -0.06, "group2" : -0.06, "group3" : -0.06},
    "field5" : {"code" : "field5", "name" : "АЧТВ", "placeholder" : "активированное частичное тромбопластиновое время (с)", "group1" : 8.12, "group2" : 7.96, "group3" : 7.92},
    "field6" : {"code" : "field6", "name" : "tPA", "placeholder" : "тканевой активатор плазминогена (нг/мл)", "group1" : 3.95, "group2" : 3.17, "group3" : 3.22},
    "field7" : {"code" : "field7", "name" : "Плазминоген", "placeholder" : "(нг/мл)", "group1" : 3.57, "group2" : 3.52, "group3" : 3.54},
    "field8" : {"code" : "field8", "name" : "PAI-1", "placeholder" : "интибитор тканевого активатора плазминогена (нг/мл)", "group1" : 1.16, "group2" : 1.07, "group3" : 1.07},
    "field9" : {"code" : "field9", "name" : "Endotelin-1", "placeholder" : "Эндотелин-1 (фмоль/мл)", "group1" : 3.47, "group2" : 2.88, "group3" : 2.7},
    "field10" : {"code" : "field10", "name" : "СРА спонтанная агрегация", "placeholder" : "(в относительных единицах)", "group1" : 82.72, "group2" : 82.44, "group3" : 83.52},
    "field11" : {"code" : "field11", "name" : "Угол наклона Спонтанная Агрегация", "placeholder" : "(в относительных единицах в минуту)", "group1" : -98.44, "group2" : -95.25, "group3" : -96.17},
    "field12" : {"code" : "field12", "name" : "СРА АДФ-агрегация", "placeholder" : "(в относительных единицах)", "group1" : 58.32, "group2" : 59.24, "group3" : 59.22},
    "field13" : {"code" : "field13", "name" : "Угол наклона АДФ-агрегация", "placeholder" : "(в относительных единицах в минуту)", "group1" : 59.03, "group2" : 59.89, "group3" : 60.25},
    "field14" : {"code" : "field14", "name" : "СРА Адреналин-агренация", "placeholder" : "(в относительных единицах)", "group1" : 5.73, "group2" : 5.32, "group3" : 5.04},
    "field15" : {"code" : "field15", "name" : "Угол наклона Адреналин-агрегация", "placeholder" : "(в относительных единицах в минуту)", "group1" : 29.15, "group2" : 27.54, "group3" : 27.56},
    "field16" : {"code" : "field16", "name" : "СРА ристомицин", "placeholder" : "(в относительных единицах)", "group1" : -0.06, "group2" : -0.18, "group3" : 0.69},
    "field17" : {"code" : "field17", "name" : "Угол наклона Ристомицин-агрегация", "placeholder" : "(в относительных единицах в минуту)", "group1" : -43.35, "group2" : -43.07, "group3" : -43.91},
    "field18" : {"code" : "field18", "name" : "ФЖЕЛ (FVC)", "placeholder" : "форсированная жизненная емкость легких (л)", "group1" : 97.86, "group2" : 102.47, "group3" : 103.06},
    "field19" : {"code" : "field19", "name" : "ОФВ1 (FEV1)", "placeholder" : "объем форсированного выдоха за 1 секунду (л)", "group1" : -127.19, "group2" : -132.6, "group3" : -132.81},
    "field20" : {"code" : "field20", "name" : "ОФВ1/ФЖЕЛ (FEV1/FVC)", "placeholder" : "индекс Тиффно (%)", "group1" : 6.75, "group2" : 7.11, "group3" : 7.18},
    "field21" : {"code" : "field21", "name" : "PEF ПОС выд", "placeholder" : "пиковая объемная скорость выдоха (л/с)", "group1" : 13.86, "group2" : 14.22, "group3" : 14.4},
    "field22" : {"code" : "field22", "name" : "VC ЖЕЛ", "placeholder" : "жизненная емкость легких (л)", "group1" : 17.38, "group2" : 16.65, "group3" : 16.46},
    "field23" : {"code" : "field23", "name" : "", "placeholder" : "", "group1" : -1444.01, "group2" : -1442.67, "group3" : -1450.88},
};

var prepareFieldsHtml = function(fieldsList) {
    var outputString = "";
    for (var fieldIndex in fieldsList) {
        if (fieldsList.hasOwnProperty(fieldIndex)) {
            outputString += '<div class="form-group group-' + fieldIndex + '">';
            if (fieldsList[fieldIndex]["name"]) {
                outputString += replaceWithObject(formFieldTemplate, fieldsList[fieldIndex]);
            }
            outputString += replaceWithObject(formFieldDebugTemplate, fieldsList[fieldIndex]);
            outputString += '</div>';
        }
    }
    return outputString;
}

var replaceWithObject = function(str, obj) {
    str = str || "";
    obj = obj || {};
    for (var fieldName in obj) {
        if (obj.hasOwnProperty(fieldName)) {
            str = str.replace(new RegExp("{" + fieldName + "}", "g"), obj[fieldName]);
        }
    }
    return str;
}

var recalcResult = function() {
    var $fieldsForm = $("#fieldsForm"),
        $results = $("#results");

    $results.addClass("hidden");
    $results.find(".group-result").addClass("hidden");

    var group1 = 0,
        group2 = 0,
        group3 = 0,
        passes = 0,
        result = 0;

    for (var fieldCode in inputFieldsData) {
        if (inputFieldsData.hasOwnProperty(fieldCode)) {
            var $fieldInput = $fieldsForm.find("#" + fieldCode),
                $fieldDebug = $fieldsForm.find(".group-" + fieldCode + " .debug-info"),
                fieldValue = parseFloat($fieldInput.val()),
                group1delta = 0,
                group2delta = 0,
                group3delta = 0;

            if (isFinite(fieldValue) && !isNaN(fieldValue)) {
                group1delta += (fieldValue * inputFieldsData[fieldCode]["group1"]);
                group2delta += (fieldValue * inputFieldsData[fieldCode]["group2"]);
                group3delta += (fieldValue * inputFieldsData[fieldCode]["group3"]);
            } else if (inputFieldsData[fieldCode]["name"] == "") {
                group1delta += inputFieldsData[fieldCode]["group1"];
                group2delta += inputFieldsData[fieldCode]["group2"];
                group3delta += inputFieldsData[fieldCode]["group3"];
            } else {
                passes--;
            }

            group1 += group1delta;
            group2 += group2delta;
            group3 += group3delta;

            if ($fieldDebug.length) {
                $fieldDebug.find(".group1delta").text(group1delta.toFixed(3));
                $fieldDebug.find(".group1value").text(group1.toFixed(3));
                $fieldDebug.find(".group2delta").text(group2delta.toFixed(3));
                $fieldDebug.find(".group2value").text(group2.toFixed(3));
                $fieldDebug.find(".group3delta").text(group3delta.toFixed(3));
                $fieldDebug.find(".group3value").text(group3.toFixed(3));
            }

            passes++;
        }
    }

    if (passes == Object.keys(inputFieldsData).length) {
        $results.removeClass("hidden");
        if (group1 > group2 && group1 > group3) {
            $results.find(".group1").removeClass("hidden");
        } else if (group2 > group1 && group2 > group3) {
            $results.find(".group2").removeClass("hidden");
        } else if (group3 > group2 && group3 > group1) {
            $results.find(".group3").removeClass("hidden");
        }
        result = probability(group1, group2, group3);
        $results.find(".group-result:visible .probability").text(result.toFixed(2));
    }
}

var probability = function(group1, group2, group3) {
    var min = Infinity;
    if (group1 > 0 && group1 < min) {
        min = group1;
    }
    if (group2 > 0 && group2 < min) {
        min = group2;
    }
    if (group3 > 0 && group3 < min) {
        min = group3;
    }
    group1 -= min;
    group2 -= min;
    group3 -= min;

    return Math.pow(Math.E, Math.max(group1, group2, group3)) / (Math.pow(Math.E, group1) + Math.pow(Math.E, group2) + Math.pow(Math.E, group3)) * 100;
}

$(function(){
    // page ready
    $("#fieldsForm").prepend(prepareFieldsHtml(inputFieldsData));

    $("#fieldsForm").on("change", "input", recalcResult);
    $("#fieldsForm").on("click", "#recalc", recalcResult);
});
