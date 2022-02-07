// fonctions
init = function (sheet) {
    //We have 3 types of sheets
    //Main is the character
    //Monster is for... monsters
    //guildsheet is for... guilds ^^ 
    //Subcomponent views aren't detected, so it's only "Main" type sheets that have their ids detected
    //If you are working on a subcomponent, you have to detect the parent "Main" view
    if (sheet.id() === "main") {
        initMain(sheet);
    }
    else if (sheet.id() === "monster") {
        initMonster(sheet);
    }
    else if (sheet.id() === "guildsheet") {
        initGuild(sheet);
    }
};
var Attribute = /** @class */ (function () {
    function Attribute(id) {
        this.id = id;
        this.label = _(id);
    }
    Attribute.prototype.getModifier = function () {
        return this.id + 'modifier';
    };
    Attribute.prototype.getRoll = function () {
        return this.id + 'roll';
    };
    Attribute.prototype.getSaveRoll = function () {
        return this.id + 'saveroll';
    };
    return Attribute;
}());
// Variable
//I tried a different methode for the monster sheets
//This variable is used in InitMonster
var Attributes = {
    strength: { name: _("Force") },
    agility: { name: _("Adresse") },
    fortitude: { name: _("Constitution") },
    intelligence: { name: _("Intelligence") },
    wisdom: { name: _("Sagesse") },
    charisma: { name: _("Charisme") }
};
var Attributes2 = [
    new Attribute('strength'),
    new Attribute('agility'),
    new Attribute('fortitude'),
    new Attribute('intelligence'),
    new Attribute('wisdom'),
    new Attribute('charisma'),
];
//The Main sheet initialization
var initMain = function (sheet) {
    //function names are self-explanatory
    initStats(sheet);
    initSkills(sheet);
    initRace(sheet);
    initLongRest(sheet); //Specfic init for the long rest button 
    initArmors(sheet);
    initWeapons(sheet);
    initItems(sheet);
    initSpells(sheet);
};
var initGuild = function (sheet) {
    initItems(sheet);
};
//We initialize everything linked to the mechanics of the stats
var initStats = function (sheet) {
    each(Attributes2, function (attr) {
        var roll = sheet.get(attr.id + 'roll');
        var label = sheet.get(attr.id + 'label');
        var saveroll = sheet.get(attr.id + 'saveroll');
        roll.on("click", function () { attribRoll(sheet, "1d20", attr.getModifier(), attr.label); });
        label.on("click", function () { attribRoll(sheet, "1d20", attr.getModifier(), attr.label); });
        saveroll.on("click", function () { attribRoll(sheet, "1d20", attr.getSaveRoll(), "Sauvegarde de" + attr.label); });
    });
};
//We initialize every skill and their computational things
var initSkills = function (sheet) {
    var acrobatiesroll = sheet.get("acrobatieroll");
    var athletismeroll = sheet.get("athletismeroll");
    var aviationroll = sheet.get("aviationroll");
    var bluffroll = sheet.get("bluffroll");
    var cavalerieroll = sheet.get("cavalerieroll");
    var cultureroll = sheet.get("cultureroll");
    var dressageroll = sheet.get("dressageroll");
    var diplomatieroll = sheet.get("diplomatieroll");
    var discretionroll = sheet.get("discretionroll");
    var escamotageroll = sheet.get("escamotageroll");
    var intimidationroll = sheet.get("intimidationroll");
    var investigationroll = sheet.get("investigationroll");
    var mysticismeroll = sheet.get("mysticismeroll");
    var medecineroll = sheet.get("medecineroll");
    var natureroll = sheet.get("natureroll");
    var navigationroll = sheet.get("navigationroll");
    var perceptionroll = sheet.get("perceptionroll");
    var psychologieroll = sheet.get("psychologieroll");
    var representationroll = sheet.get("representationroll");
    var survieroll = sheet.get("survieroll");
    var arcsroll = sheet.get("arcroll");
    var arbaletesroll = sheet.get("arbaletesroll");
    var armesafeuroll = sheet.get("armesafeuroll");
    var armesdhastroll = sheet.get("armesdhastroll");
    var armesdepugilatroll = sheet.get("armesdepugilatroll");
    var baguettesroll = sheet.get("baguettesroll");
    var batonsroll = sheet.get("batonsroll");
    var boucliersroll = sheet.get("boucliersroll");
    var daguesroll = sheet.get("daguesroll");
    var epeesunemroll = sheet.get("epeesunemroll");
    var epeesdeuxmroll = sheet.get("epeesdeuxmroll");
    var glaivesdeguerreroll = sheet.get("glaivesdeguerreroll");
    var glaiveslunairesroll = sheet.get("glaiveslunairesroll");
    var hachesunemroll = sheet.get("hachesunemroll");
    var hachesdeuxmroll = sheet.get("hachesdeuxmroll");
    var massesunemroll = sheet.get("massesunemroll");
    var massesdeuxmroll = sheet.get("massesdeuxmroll");
    var lameslunairesroll = sheet.get("lameslunairesroll");
    var lamessindoreiroll = sheet.get("lamessindoreiroll");
    var totemstaurenroll = sheet.get("totemstaurenroll");
    var initiativeroll = sheet.get("initiativeroll");
    var initiativeroll2 = sheet.get("initiative");
    var initiativeroll3 = sheet.get("initiativemodifier");
    //For each skill, we launch a test with the skill modifier
    acrobatiesroll.on("click", function () {
        attribRoll(sheet, "1d20", "acrobatiemodifier", "Acrobaties");
    });
    athletismeroll.on("click", function () {
        attribRoll(sheet, "1d20", "athletismemodifier", "Athlétisme");
    });
    aviationroll.on("click", function () {
        attribRoll(sheet, "1d20", "aviationmodifier", "Aviation");
    });
    bluffroll.on("click", function () {
        attribRoll(sheet, "1d20", "bluffmodifier", "Tromperie");
    });
    cavalerieroll.on("click", function () {
        attribRoll(sheet, "1d20", "cavaleriemodifier", "Cavalerie");
    });
    cultureroll.on("click", function () {
        attribRoll(sheet, "1d20", "culturemodifier", "Culture");
    });
    diplomatieroll.on("click", function () {
        attribRoll(sheet, "1d20", "diplomatiemodifier", "Diplomatie");
    });
    discretionroll.on("click", function () {
        attribRoll(sheet, "1d20", "discretionmodifier", "Discrétion");
    });
    dressageroll.on("click", function () {
        attribRoll(sheet, "1d20", "dressagemodifier", "Dressage");
    });
    escamotageroll.on("click", function () {
        attribRoll(sheet, "1d20", "escamotagemodifier", "Escamotage");
    });
    intimidationroll.on("click", function () {
        attribRoll(sheet, "1d20", "intimidationmodifier", "Intimidation");
    });
    investigationroll.on("click", function () {
        attribRoll(sheet, "1d20", "investigationmodifier", "Investigation");
    });
    medecineroll.on("click", function () {
        attribRoll(sheet, "1d20", "medecinemodifier", "Médecine");
    });
    mysticismeroll.on("click", function () {
        attribRoll(sheet, "1d20", "mysticismemodifier", "Mysticisme");
    });
    natureroll.on("click", function () {
        attribRoll(sheet, "1d20", "naturemodifier", "Nature");
    });
    navigationroll.on("click", function () {
        attribRoll(sheet, "1d20", "navigationmodifier", "Navigation");
    });
    perceptionroll.on("click", function () {
        attribRoll(sheet, "1d20", "perceptionmodifier", "Perception");
    });
    psychologieroll.on("click", function () {
        attribRoll(sheet, "1d20", "psychologiemodifier", "Perspicacité");
    });
    representationroll.on("click", function () {
        attribRoll(sheet, "1d20", "representationmodifier", "Représentation");
    });
    survieroll.on("click", function () {
        attribRoll(sheet, "1d20", "surviemodifier", "Survie");
    });
    arcsroll.on("click", function () {
        attribRoll(sheet, "1d20", "arcmodifier", "Arcs");
    });
    arbaletesroll.on("click", function () {
        attribRoll(sheet, "1d20", "arbaletesmodifier", "Arbalètes");
    });
    armesafeuroll.on("click", function () {
        attribRoll(sheet, "1d20", "armesafeumodifier", "Armes à feu");
    });
    armesdhastroll.on("click", function () {
        attribRoll(sheet, "1d20", "armesdhastmodifier", "Armes d'hast");
    });
    armesdepugilatroll.on("click", function () {
        attribRoll(sheet, "1d20", "armesdepugilatmodifier", "Armes de pugilat");
    });
    baguettesroll.on("click", function () {
        attribRoll(sheet, "1d20", "baguettesmodifier", "Baguettes");
    });
    batonsroll.on("click", function () {
        attribRoll(sheet, "1d20", "batonsmodifier", "Bâtons");
    });
    boucliersroll.on("click", function () {
        attribRoll(sheet, "1d20", "boucliersmodifier", "Boucliers");
    });
    daguesroll.on("click", function () {
        attribRoll(sheet, "1d20", "daguesmodifier", "Dagues");
    });
    epeesunemroll.on("click", function () {
        attribRoll(sheet, "1d20", "epeesunemmodifier", "Épées à 1M");
    });
    epeesdeuxmroll.on("click", function () {
        attribRoll(sheet, "1d20", "epeesdeuxmmodifier", "Épées à 2M");
    });
    glaivesdeguerreroll.on("click", function () {
        attribRoll(sheet, "1d20", "glaivesdeguerremodifier", "Glaives de guerre");
    });
    glaiveslunairesroll.on("click", function () {
        attribRoll(sheet, "1d20", "glaiveslunairesmodifier", "Glaives Lunaires Kaldorei");
    });
    hachesunemroll.on("click", function () {
        attribRoll(sheet, "1d20", "hachesunemmodifier", "Haches à 1M");
    });
    hachesdeuxmroll.on("click", function () {
        attribRoll(sheet, "1d20", "hachesdeuxmmodifier", "Haches à 2M");
    });
    lameslunairesroll.on("click", function () {
        attribRoll(sheet, "1d20", "lameslunairesmodifier", "Lames Lunaires Kaldorei");
    });
    lamessindoreiroll.on("click", function () {
        attribRoll(sheet, "1d20", "lamessindoreimodifier", "Lames Sin'dorei");
    });
    massesunemroll.on("click", function () {
        attribRoll(sheet, "1d20", "massesunemmodifier", "Masses à 1M");
    });
    massesdeuxmroll.on("click", function () {
        attribRoll(sheet, "1d20", "massesdeuxmmodifier", "Masses à 2M");
    });
    totemstaurenroll.on("click", function () {
        attribRoll(sheet, "1d20", "totemstaurenmodifier", "Totems Tauren");
    });
    //We add the initiative roll
    initiativeroll.on("click", function () {
        attribRoll(sheet, "1d20", "initiativemodifier", "initiative");
    });
    initiativeroll2.on("click", function () {
        attribRoll(sheet, "1d20", "initiativemodifier", "initiative");
    });
    initiativeroll3.on("click", function () {
        attribRoll(sheet, "1d20", "initiativemodifier", "initiative");
    });
};
//Simple thing to make sur that when you change race, the classe changes
var initRace = function (sheet) {
    var race = sheet.get("race");
    var classe = sheet.get("class");
    race.on("update", function (race, classe) {
        modifyClasses(sheet, race.value(), classe);
    });
};
var initLongRest = function (sheet) {
    //The long rest modifies every value needed
    var longrest = sheet.get("longrest");
    longrest.on("click", function (first) {
        var health = sheet.get("currenthp");
        var maxhealth = sheet.get("maxhp");
        var healthdice = sheet.get("healthdice");
        var maxhealthdice = sheet.get("maxhealthdice");
        var manadice = sheet.get("manadice");
        var maxmanadice = sheet.get("maxmanadice");
        health.value(maxhealth.value());
        healthdice.value(Math.min(healthdice.value() + (maxhealthdice.value() / 2), maxhealthdice.value()));
        manadice.value(Math.min(manadice.value() + (maxmanadice.value() / 2), maxmanadice.value()));
    });
    //Strength/Agility/Intelligence/Wisdom/Charisma/Fortitude
};
//Code is getting more complex from here
//We use repeaters which asks for a more complex system
/*
* How does a repeater works ?
* You put a repeater in place with a specific ID
* You create an "edit" view, that will be the editable version of the item that is repeated (so with text input, number input, etc)
* You create a "read" view, that will be the read-only version of the item, based on labels that gather the data from the edit view
* For example, in the edit view, you have the name of a weapon, that you name "weaponname"
* To get the value, you put in a label in read view that computed value : "#weaponname"
*/
/*
* Now how do we work on automation in a repeater ?
* We add an event listener for something, and put the responsability on a child object (down below "clear_weapon_name" for example)
* This component will fire the event when it is clicked, we can then gather from which repeated object it comes from (index)
* and from there can work with anything
*/
var initWeapons = function (sheet) {
    //This reveals the details
    sheet.get('weapons_repeater').on("click", "clear_weapon_name_btn", function (component) {
        var index = component.index();
        sheet.get('weapons_repeater').find(index).find('weapon_arrow_show').hide();
        sheet.get('weapons_repeater').find(index).find('weapon_arrow_hide').show();
        sheet.get('weapons_repeater').find(index).find('list_weapon').show();
    });
    //Hides the details
    sheet.get('weapons_repeater').on("click", "hidden_weapon_name_btn", function (component) {
        var index = component.index();
        sheet.get('weapons_repeater').find(index).find('weapon_arrow_show').show();
        sheet.get('weapons_repeater').find(index).find('weapon_arrow_hide').hide();
        sheet.get('weapons_repeater').find(index).find('list_weapon').hide();
    });
    //Damage throw automation
    sheet.get('weapons_repeater').on("click", "wpndamageroll", function (component) {
        var index = component.index();
        var privacy = sheet.get("diceprivacy").value();
        var value = sheet.get('weapons_repeater').find(index).find('weapondamage').value();
        var item = sheet.get('weapons_repeater').find(index).find('wpnname').value();
        //let dice;
        var weaponmodifier = sheet.get('weapons_repeater').find(index).find('wpnmodifier');
        var weaponmastering = sheet.get('weapons_repeater').find(index).find('wpnmastering');
        var mastering = sheet.get('mastering');
        var bonus = 0;
        if (weaponmastering.text() === "true") {
            bonus += parseInt(mastering.value());
        }
        var table = Tables.get("tests");
        if (value === "") {
            value = "0";
        }
        var modifier;
        if (weaponmodifier.text() === "Aucun" || weaponmodifier.text() === "0") {
            modifier = "0";
        }
        else {
            modifier = sheet.get(table.get(weaponmodifier.text()).tabid).value();
        }
        Dice.roll(sheet, value + " + " + (parseInt(modifier) + parseInt(bonus)), "Attaque avec " + item, privacy);
    });
    //Test throw automation
    sheet.get('weapons_repeater').on("click", "wpntestroll", function (component) {
        var index = component.index();
        var privacy = sheet.get("diceprivacy").value();
        var value = sheet.get('weapons_repeater').find(index).find('wpntestdice').value();
        var item = sheet.get('weapons_repeater').find(index).find('wpnname').value();
        //let dice;
        var weaponmodifier = sheet.get('weapons_repeater').find(index).find('wpntestmodifier');
        var weaponmastering = sheet.get('weapons_repeater').find(index).find('wpntestmastering');
        var mastering = sheet.get('mastering');
        var bonus = 0;
        if (weaponmastering.text() === "true") {
            bonus += parseInt(mastering.value());
        }
        var table = Tables.get("tests");
        var modifier;
        if (weaponmodifier.text() === "Aucun" || weaponmodifier.text() === "0") {
            modifier = "0";
        }
        else {
            modifier = sheet.get(table.get(weaponmodifier.text()).tabid).value();
        }
        Dice.roll(sheet, value + " + " + (parseInt(modifier) + parseInt(bonus)), "Test pour attaque avec " + item, privacy);
    });
    //Full weapon, so test roll, containing in itself the damage roll
    sheet.get('weapons_repeater').on("click", "weapondamageroll", function (component) {
        var index = component.index();
        var privacy = sheet.get("diceprivacy").value();
        //This is the part for the test
        var value = sheet.get('weapons_repeater').find(index).find('wpntestdice').value();
        var item = sheet.get('weapons_repeater').find(index).find('wpnname').value();
        //let dice;
        var weaponmodifier = sheet.get('weapons_repeater').find(index).find('wpntestmodifier');
        var weaponmastering = sheet.get('weapons_repeater').find(index).find('wpntestmastering');
        var mastering = sheet.get('mastering');
        var bonus = 0;
        if (weaponmastering.text() === "true") {
            bonus += parseInt(mastering.value());
        }
        var table = Tables.get("tests");
        var modifier;
        if (weaponmodifier.text() === "Aucun" || weaponmodifier.text() === "0") {
            modifier = "0";
        }
        else {
            modifier = sheet.get(table.get(weaponmodifier.text()).tabid).value();
        }
        //This is the part for damage
        var damagevalue = sheet.get('weapons_repeater').find(index).find('weapondamage').value();
        if (damagevalue === "") {
            damagevalue = "0";
        }
        var weapondamagemodifier = sheet.get('weapons_repeater').find(index).find('wpnmodifier');
        var weapondamagemastering = sheet.get('weapons_repeater').find(index).find('wpnmastering');
        var damagebonus = 0;
        if (weapondamagemastering.text() === "true") {
            damagebonus += parseInt(mastering.value());
        }
        var damagemodifier;
        if (weapondamagemodifier.text() === "Aucun" || weapondamagemodifier.text() === "0") {
            modifier = "0";
        }
        else {
            damagemodifier = sheet.get(table.get(weapondamagemodifier.text()).tabid).value();
        }
        Dice.roll(sheet, value + " + " + (parseInt(modifier) + parseInt(bonus)), "Test pour attaque avec " + item, privacy, {
            "Jet de dégâts": function (dice) {
                Dice.roll(sheet, damagevalue + " + " + (parseInt(damagemodifier) + parseInt(damagebonus)), "Attaque avec " + item, privacy); // Rolled when the player clicks "Jet de Dégâts"
            }
        });
    });
};
//Same inner workings as for the weapons
var initSpells = function (sheet) {
    sheet.get('spells_repeater').on("click", "clear_spell_name_btn", function (component) {
        var index = component.index();
        sheet.get('spells_repeater').find(index).find('spell_arrow_show').hide();
        sheet.get('spells_repeater').find(index).find('spell_arrow_hide').show();
        sheet.get('spells_repeater').find(index).find('list_spell').show();
    });
    sheet.get('spells_repeater').on("click", "hidden_spell_name_btn", function (component) {
        var index = component.index();
        sheet.get('spells_repeater').find(index).find('spell_arrow_show').show();
        sheet.get('spells_repeater').find(index).find('spell_arrow_hide').hide();
        sheet.get('spells_repeater').find(index).find('list_spell').hide();
    });
    sheet.get('spells_repeater').on("click", "spldamageroll", function (component) {
        var index = component.index();
        var privacy = sheet.get("diceprivacy").value();
        var value = sheet.get('spells_repeater').find(index).find('spldamage').value();
        var item = sheet.get('spells_repeater').find(index).find('splname').value();
        //let dice;
        var spellmodifier = sheet.get('spells_repeater').find(index).find('splmodifier');
        var spellmastering = sheet.get('spells_repeater').find(index).find('splmastering');
        var mastering;
        var bonus = 0;
        mastering = sheet.get('mastering');
        if (spellmastering.text() === "true") {
            bonus += parseInt(mastering.value());
        }
        var table = Tables.get("tests");
        if (value === "") {
            value = "0";
        }
        var modifier = 0;
        if (spellmodifier.text() === "Aucun" || spellmodifier.text() === "0") {
            modifier = "0";
        }
        else {
            modifier = sheet.get(table.get(spellmodifier.text()).tabid).value();
        }
        Dice.roll(sheet, value + " + " + (parseInt(modifier) + parseInt(bonus)), "Attaque avec " + item, privacy);
    });
    sheet.get('spells_repeater').on("click", "spltestroll", function (component) {
        var index = component.index();
        var privacy = sheet.get("diceprivacy").value();
        var item = sheet.get('spells_repeater').find(index).find('splname').value();
        //let dice;
        var spellmodifier = sheet.get('spells_repeater').find(index).find('spltestmodifier');
        var spelldamage = sheet.get('spells_repeater').find(index).find('spltestdamage').value();
        var spellmastering = sheet.get('spells_repeater').find(index).find('spltestmastering');
        var value = "1d20";
        var mastering;
        var bonus = 0;
        mastering = sheet.get('mastering');
        if (spellmastering.text() === "true") {
            bonus += parseInt(mastering.value());
        }
        var table = Tables.get("tests");
        var modifier = 0;
        if (spellmodifier.text() === "Aucun" || spellmodifier.text() === "0") {
            modifier = "0";
        }
        else {
            modifier = sheet.get(table.get(spellmodifier.text()).tabid).value();
        }
        Dice.roll(sheet, value + " + " + (parseInt(modifier) + parseInt(spelldamage) + parseInt(bonus)), "Attaque avec " + item, privacy);
    });
    sheet.get('spells_repeater').on("click", "splname", function (component) {
        var index = component.index();
        var privacy = sheet.get("diceprivacy").value();
        var item = sheet.get('spells_repeater').find(index).find('splname').value();
        //let dice;
        //Gestion du test
        var spellmodifier = sheet.get('spells_repeater').find(index).find('spltestmodifier');
        var spelldamage = sheet.get('spells_repeater').find(index).find('spltestdamage').value();
        var spellmastering = sheet.get('spells_repeater').find(index).find('spltestmastering');
        var value = "1d20";
        var mastering;
        var bonus = 0;
        mastering = sheet.get('mastering');
        if (spellmastering.text() === "true") {
            bonus += parseInt(mastering.value());
        }
        var table = Tables.get("tests");
        var modifier = 0;
        if (spellmodifier.text() === "Aucun" || spellmodifier.text() === "0") {
            modifier = "0";
        }
        else {
            modifier = sheet.get(table.get(spellmodifier.text()).tabid).value();
        }
        //Gestion des dégâts
        var spelldamagemodifier = sheet.get('spells_repeater').find(index).find('splmodifier');
        var spelldamagemastering = sheet.get('spells_repeater').find(index).find('splmastering');
        var damagebonus = 0;
        if (spelldamagemastering.text() === "true") {
            damagebonus += parseInt(mastering.value());
        }
        var damagemodifier;
        var damagevalue = sheet.get('spells_repeater').find(index).find('spldamage').value();
        if (damagevalue === "") {
            damagevalue = "0";
        }
        if (spelldamagemodifier.text() === "Aucun" || spelldamagemodifier.text() === "0") {
            damagemodifier = "0";
        }
        else {
            damagemodifier = sheet.get(table.get(spelldamagemodifier.text()).tabid).value();
        }
        Dice.roll(sheet, value + " + " + (parseInt(modifier) + parseInt(spelldamage) + parseInt(bonus)), "Attaque avec " + item, privacy, {
            "Jet de dégâts": function (dice) {
                Dice.roll(sheet, damagevalue + " + " + (parseInt(damagemodifier) + parseInt(damagebonus)), "Attaque avec " + item, privacy); // Rolled when the player clicks "Jet de Dégâts"
            }
        });
    });
};
//Same inner workings as for the weapons
var initArmors = function (sheet) {
    sheet.get('armors_repeater').on("click", "clear_armor_name_btn", function (component) {
        var index = component.index();
        sheet.get('armors_repeater').find(index).find('armor_arrow_show').hide();
        sheet.get('armors_repeater').find(index).find('armor_arrow_hide').show();
        sheet.get('armors_repeater').find(index).find('list_armor').show();
    });
    sheet.get('armors_repeater').on("click", "hidden_armor_name_btn", function (component) {
        var index = component.index();
        sheet.get('armors_repeater').find(index).find('armor_arrow_show').show();
        sheet.get('armors_repeater').find(index).find('armor_arrow_hide').hide();
        sheet.get('armors_repeater').find(index).find('list_armor').hide();
    });
};
//Simple working than weapons
//In this case there is no automation except for the detail showing
var initItems = function (sheet) {
    sheet.get('items_repeater').on("click", "clear_item_name_btn", function (component) {
        var index = component.index();
        sheet.get('items_repeater').find(index).find('item_arrow_show').hide();
        sheet.get('items_repeater').find(index).find('item_arrow_hide').show();
        sheet.get('items_repeater').find(index).find('list_item').show();
    });
    sheet.get('items_repeater').on("click", "hidden_item_name_btn", function (component) {
        var index = component.index();
        sheet.get('items_repeater').find(index).find('item_arrow_show').show();
        sheet.get('items_repeater').find(index).find('item_arrow_hide').hide();
        sheet.get('items_repeater').find(index).find('list_item').hide();
    });
};
var initMonster = function (sheet) {
    //Pour chaque attribut on update le modifier, on gère l'update si la valeur est modifiée et on instaure les dice rolls aux clics
    initMonsterSpells(sheet);
    each(Attributes, function (attribut, key) {
        var value = parseInt(sheet.get("m" + key).value());
        var modifier = (value > 10) ? Math.round((value - 10) / 2) : ((value < 10) ? Math.floor((value - 10) / 2) : 0);
        sheet.get("m" + key + "modifier").text(modifier);
        sheet.get("m" + key + "roll").on("click", function () {
            attribRoll(sheet, "1d20", "m" + key + "modifier", attribut.name);
        });
        sheet.get("m" + key + "modifier").on("click", function () {
            attribRoll(sheet, "1d20", "m" + key + "modifier", attribut.name);
        });
        sheet.get("m" + key).on("update", function () {
            var value = parseInt(sheet.get("m" + key).value());
            var modifier = Math.floor((value - 10) / 2);
            sheet.get("m" + key + "modifier").text(modifier);
        });
    });
    //We init the initiative roll for it to take into account agility
    sheet.get("initiative").on("click", function () {
        var value = sheet.get("magilitymodifier").value();
        var privacy = sheet.get("diceprivacy").value();
        log(value);
        Dice.roll(sheet, "1d20 + " + value + "[initiative]", "Jet d'initiative", privacy);
    });
};
//Same inner workings as for the weapons
//Why is there a special init for the monster spells ? 
//Because they lack some data that a player has, so we have to "simulate it" in order to make each throw (like the mastering value, which is defaulted to 2)
var initMonsterSpells = function (sheet) {
    sheet.get('spells_repeater').on("click", "clear_spell_name_btn", function (component) {
        var index = component.index();
        sheet.get('spells_repeater').find(index).find('spell_arrow_show').hide();
        sheet.get('spells_repeater').find(index).find('spell_arrow_hide').show();
        sheet.get('spells_repeater').find(index).find('list_spell').show();
    });
    sheet.get('spells_repeater').on("click", "hidden_spell_name_btn", function (component) {
        var index = component.index();
        sheet.get('spells_repeater').find(index).find('spell_arrow_show').show();
        sheet.get('spells_repeater').find(index).find('spell_arrow_hide').hide();
        sheet.get('spells_repeater').find(index).find('list_spell').hide();
    });
    sheet.get('spells_repeater').on("click", "spldamageroll", function (component) {
        var index = component.index();
        var privacy = sheet.get("diceprivacy").value();
        var value = sheet.get('spells_repeater').find(index).find('spldamage').value();
        var item = sheet.get('spells_repeater').find(index).find('splname').value();
        //let dice;
        var spellmodifier = sheet.get('spells_repeater').find(index).find('splmodifier');
        var spellmastering = sheet.get('spells_repeater').find(index).find('splmastering');
        var mastering;
        var bonus = 0;
        mastering = 2;
        if (spellmastering.text() === "true") {
            bonus += parseInt(mastering);
        }
        var table = Tables.get("tests");
        if (value === "") {
            value = "0";
        }
        var modifier = 0;
        if (spellmodifier.text() === "Aucun" || spellmodifier.text() === "0") {
            modifier = "0";
        }
        else {
            modifier = sheet.get("m" + table.get(spellmodifier.text()).tabid).value();
        }
        Dice.roll(sheet, value + " + " + (parseInt(modifier) + parseInt(bonus)), "Attaque avec " + item, privacy);
    });
    sheet.get('spells_repeater').on("click", "spltestroll", function (component) {
        var index = component.index();
        var privacy = sheet.get("diceprivacy").value();
        var item = sheet.get('spells_repeater').find(index).find('splname').value();
        //let dice;
        var spellmodifier = sheet.get('spells_repeater').find(index).find('spltestmodifier');
        var spellmastering = sheet.get('spells_repeater').find(index).find('spltestmastering');
        var spelldamage = sheet.get('spells_repeater').find(index).find('spltestdamage').value();
        var value = "1d20";
        var mastering;
        var bonus = 0;
        mastering = 2;
        if (spellmastering.text() === "true") {
            bonus += parseInt(mastering);
        }
        var table = Tables.get("tests");
        var modifier = 0;
        if (spellmodifier.text() === "Aucun" || spellmodifier.text() === "0") {
            modifier = "0";
        }
        else {
            modifier = sheet.get("m" + table.get(spellmodifier.text()).tabid).value();
        }
        Dice.roll(sheet, value + " + " + (parseInt(modifier) + parseInt(spelldamage) + parseInt(bonus)), "Attaque avec " + item, privacy);
    });
    sheet.get('spells_repeater').on("click", "splname", function (component) {
        var index = component.index();
        var privacy = sheet.get("diceprivacy").value();
        var item = sheet.get('spells_repeater').find(index).find('splname').value();
        //let dice;
        //Gestion du test
        var spellmodifier = sheet.get('spells_repeater').find(index).find('spltestmodifier');
        var spelldamage = sheet.get('spells_repeater').find(index).find('spltestdamage').value();
        var spellmastering = sheet.get('spells_repeater').find(index).find('spltestmastering');
        var value = "1d20";
        var mastering;
        var bonus = 0;
        mastering = 2;
        if (spellmastering.text() === "true") {
            bonus += parseInt(mastering);
        }
        var table = Tables.get("tests");
        var modifier = 0;
        if (spellmodifier.text() === "Aucun" || spellmodifier.text() === "0") {
            modifier = "0";
        }
        else {
            modifier = sheet.get("m" + table.get(spellmodifier.text()).tabid).value();
        }
        //Gestion des dégâts
        var spelldamagemodifier = sheet.get('spells_repeater').find(index).find('splmodifier');
        var spelldamagemastering = sheet.get('spells_repeater').find(index).find('splmastering');
        var damagebonus = 0;
        if (spelldamagemastering.text() === "true") {
            damagebonus += parseInt(mastering);
        }
        var damagemodifier;
        var damagevalue = sheet.get('spells_repeater').find(index).find('spldamage').value();
        if (damagevalue === "") {
            damagevalue = "0";
        }
        if (spelldamagemodifier.text() === "Aucun" || spelldamagemodifier.text() === "0") {
            damagemodifier = "0";
        }
        else {
            damagemodifier = sheet.get("m" + table.get(spelldamagemodifier.text()).tabid).value();
        }
        Dice.roll(sheet, value + " + " + (parseInt(modifier) + parseInt(spelldamage) + parseInt(bonus)), "Attaque avec " + item, privacy, {
            "Jet de dégâts": function (dice) {
                Dice.roll(sheet, damagevalue + " + " + (parseInt(damagemodifier) + parseInt(damagebonus)), "Attaque avec " + item, privacy); // Rolled when the player clicks "Jet de Dégâts"
            }
        });
    });
};
//To update the class, we check in Tables the table that contains the classes for a specific race. 
//The race ID is used as the Table name containing the corresponding classes
var modifyClasses = /**
* @param Sheet sheet
* @param {string} race
* @param {any} classe
* @param {any} [spec]
*/ function (sheet, race, classe, spec) {
    var table = Tables.get(race);
    var choices = {};
    var i = 0;
    table.each(function (attribute, choices) {
        choices[i] = attribute.name;
        i++;
    });
    classe.setChoices(choices);
};
//This does not work, so we just put an input text in replacement
var modifySpecs = /**
* @param Sheet sheet
* @param {string} classe
* @param {any} specs
*/ function (sheet, classe, specs) {
    var table = Tables.get(classe);
    var choices = {};
    var i = 0;
    table.each(function (attribute, choices) {
        choices[i] = attribute.name;
        i++;
    });
    specs.setChoices(choices);
};
var attribRoll = function (sheet, diceWanted, attrib, attribName) {
    var modifier = sheet.get(attrib).value();
    var advantage;
    var privacy = sheet.get("diceprivacy").value();
    if (sheet.id() == "main") {
        advantage = sheet.get("advantage").value();
    }
    else {
        advantage = 0;
    }
    Bindings.clear(attrib);
    var dice;
    if (diceWanted == "1d20") {
        if (advantage == 3) { //Disadvantage
            //log("disAdvantage");
            dice = Dice.create('2d20').keepl().add(modifier).tag('Desavantage');
        }
        else if (advantage == 2) { //Advantage
            //log("Advantage");
            dice = Dice.create('2d20').keeph().add(modifier).tag('Avantage');
        }
        else {
            //log("Normal");
            dice = Dice.create('1d20').add(modifier); //Normal dice
        }
    }
    if (attribName == "initiative") {
        Dice.roll(sheet, dice.tag('initiative'), "initiative", privacy);
    }
    else {
        Dice.roll(sheet, dice, "Jet de " + attribName, privacy);
    }
};
//This enables putting the quick resources in the bar surrounding the player's token
getBarAttributes = function (sheet) {
    if (sheet.id() === "main") {
        return {
            "HP": ["currenthp", "maxhp"],
            "Quick Resource #1": ["qronecurrent", "qronemax"],
            "Quick Resource #2": ["qrtwocurrent", "qrtwomax"],
            "Quick Resource #3": ["qrthreecurrent", "qrthreemax"]
        };
    }
    //If the DM wants, he can put the monster's hp on its bar
    if (sheet.id() === "monster") {
        return {
            "HP": ["hp", "hpmax"]
            //"Mana": ["mana", 30] // you can use numbers directly for maximums
        };
    }
    return {};
};
