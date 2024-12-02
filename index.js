import { components } from "./models.js"; 

function createCriteriaModal(index, arrayOfIPs=[]) {
    const criteriaModal = document.createElement('div');
    criteriaModal.className = 'criteria-modal';

    const criteriaNumber = document.createElement('div');
    criteriaNumber.className = 'criteria-number';

    const criteriaText = document.createElement('p');
    criteriaText.textContent = `Criteria ${index + 1}`;

    const criteriaBtnBox = document.createElement('div');
    criteriaBtnBox.id = 'criteria-btn-box';

    const addButton = document.createElement('button');
    addButton.className = 'btn btn-danger';
    addButton.textContent = 'Delete';
    criteriaBtnBox.appendChild(addButton);

    criteriaNumber.appendChild(criteriaText);
    criteriaNumber.appendChild(criteriaBtnBox);

    const hr = document.createElement('hr');

    const criteriaStructure1 = document.createElement('div');
    criteriaStructure1.className = 'criteria-1-structure-1';

    const select1 = document.createElement('select');
    select1.className = 'form-select';
    select1.setAttribute('aria-label', 'Default select example');
    const option1 = document.createElement('option');
    option1.selected = true;
    option1.textContent = 'Client IP';
    select1.appendChild(option1);
    for (let i = 1; i <= 3; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Option ${i}`;
        select1.appendChild(option);
    }

    const select2 = document.createElement('select');
    select2.className = 'form-select';
    select2.setAttribute('aria-label', 'Default select example');
    const option2 = document.createElement('option');
    option2.selected = true;
    option2.textContent = 'Is one of';
    select2.appendChild(option2);
    for (let i = 1; i <= 3; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Option ${i}`;
        select2.appendChild(option);
    }

    const formCheck = document.createElement('div');
    formCheck.className = 'form-check';

    const checkbox = document.createElement('input');
    checkbox.className = 'form-check-input';
    checkbox.type = 'checkbox';
    checkbox.id = 'flexCheckDefault';

    const label = document.createElement('label');
    label.className = 'form-check-label';
    label.htmlFor = 'flexCheckDefault';
    label.textContent = 'Consider X Forwarded for IP';

    formCheck.appendChild(checkbox);
    formCheck.appendChild(label);

    criteriaStructure1.appendChild(select1);
    criteriaStructure1.appendChild(select2);
    criteriaStructure1.appendChild(formCheck);

    const criteriaStructure2 = document.createElement('div');
    criteriaStructure2.className = 'criteria-1-structure-2';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    input.placeholder = 'Enter value';
    criteriaStructure2.appendChild(input);

    const ip = document.createElement('div');
    ip.className = 'ip';

    for (let i = 0; i < arrayOfIPs.length; i++) {
        const ipText = document.createElement('span');
        ipText.textContent = arrayOfIPs[i];
        ip.appendChild(ipText);
    }

    criteriaStructure2.appendChild(ip);

    criteriaModal.appendChild(criteriaNumber);
    criteriaModal.appendChild(hr);
    criteriaModal.appendChild(criteriaStructure1);
    criteriaModal.appendChild(criteriaStructure2);

    const parent = document.getElementById('rule-description-parent');
    parent.appendChild(criteriaModal);
}

function createCriteriaModal2(index, arrayOfIPs=[]) {
    const criteriaModal = document.createElement('div');
    criteriaModal.className = 'criteria-modal';

    const criteriaNumber = document.createElement('div');
    criteriaNumber.className = 'criteria-number';

    const criteriaText = document.createElement('p');
    criteriaText.textContent = `Criteria ${index + 1}`;

    const criteriaBtnBox = document.createElement('div');
    criteriaBtnBox.id = 'criteria-btn-box';

    const addButton = document.createElement('button');
    addButton.className = 'btn btn-danger';
    addButton.textContent = 'Delete';
    criteriaBtnBox.appendChild(addButton);

    criteriaNumber.appendChild(criteriaText);
    criteriaNumber.appendChild(criteriaBtnBox);

    const hr = document.createElement('hr');

    const criteriaStructure1 = document.createElement('div');
    criteriaStructure1.className = 'criteria-2-structure-1';

    const select1 = document.createElement('select');
    select1.className = 'form-select';
    select1.setAttribute('aria-label', 'Default select example');
    const option1 = document.createElement('option');
    option1.selected = true;
    option1.textContent = 'Content type';
    select1.appendChild(option1);
    for (let i = 1; i <= 3; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Option ${i}`;
        select1.appendChild(option);
    }

    const select2 = document.createElement('select');
    select2.className = 'form-select';
    select2.setAttribute('aria-label', 'Default select example');
    const option2 = document.createElement('option');
    option2.selected = true;
    option2.textContent = 'Is one of';
    select2.appendChild(option2);
    for (let i = 1; i <= 3; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Option ${i}`;
        select2.appendChild(option);
    }

    const formCheck1 = document.createElement('div');
    formCheck1.className = 'form-check';

    const checkbox1 = document.createElement('input');
    checkbox1.className = 'form-check-input';
    checkbox1.type = 'checkbox';
    checkbox1.id = 'flexCheckDefault1';

    const label1 = document.createElement('label');
    label1.className = 'form-check-label';
    label1.htmlFor = 'flexCheckDefault1';
    label1.textContent = 'Case-sensitive value';

    formCheck1.appendChild(checkbox1);
    formCheck1.appendChild(label1);

    const formCheck2 = document.createElement('div');
    formCheck2.className = 'form-check';

    const checkbox2 = document.createElement('input');
    checkbox2.className = 'form-check-input';
    checkbox2.type = 'checkbox';
    checkbox2.id = 'flexCheckDefault2';

    const label2 = document.createElement('label');
    label2.className = 'form-check-label';
    label2.htmlFor = 'flexCheckDefault2';
    label2.textContent = 'Wildcards in value';

    formCheck2.appendChild(checkbox2);
    formCheck2.appendChild(label2);

    criteriaStructure1.appendChild(select1);
    criteriaStructure1.appendChild(select2);
    criteriaStructure1.appendChild(formCheck1);
    criteriaStructure1.appendChild(formCheck2);

    const criteriaStructure2 = document.createElement('div');
    criteriaStructure2.className = 'criteria-2-structure-2';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    input.placeholder = 'Enter value';
    criteriaStructure2.appendChild(input);

    const ip = document.createElement('div');
    ip.className = 'ip';

    for (let i = 0; i < arrayOfIPs.length; i++) {
        const ipText = document.createElement('span');
        ipText.textContent = arrayOfIPs[i];
        ip.appendChild(ipText);
    }

    criteriaStructure2.appendChild(ip);


    criteriaModal.appendChild(criteriaNumber);
    criteriaModal.appendChild(hr);
    criteriaModal.appendChild(criteriaStructure1);
    criteriaModal.appendChild(criteriaStructure2);

    const parent = document.getElementById('rule-description-parent');
    parent.appendChild(criteriaModal);
}

function addIP(event) {
    
    const criteriaModal = event.target.closest('.criteria-modal');
    const input = criteriaModal.querySelector('input.form-control');
    const value = input.value;
    const ip = input.nextElementSibling;
    const ipText = document.createElement('span');
    ipText.textContent = value;
    ip.appendChild(ipText);
    
    const criteriaNumber = criteriaModal.querySelector('.criteria-number').querySelector('p').textContent;
    
    const ruleNameParent = document.getElementById('rule-name-parent');
    const ruleNameInput = ruleNameParent.querySelector('input');
    const ruleName = ruleNameInput.value;
    const indexofCriteria = Array.from(
        event.target.parentElement.parentElement.parentElement.children
    ).indexOf(
        event.target.parentElement.parentElement
    ) - 2;

    const rule = components.find((rule) => rule.name === ruleName);

    const key = Object.keys(components[0].criteria[indexofCriteria])[0];
    rule.criteria[indexofCriteria][key].push(value);
    input.value = '';
}

function loadRules(){
    for (let i=0; i<components.length; i++) {
        const ruleName = components[i].name;        
        let individualActiveRuleComponent = document.createElement('div');
        individualActiveRuleComponent.id = `rules${i}`;
        individualActiveRuleComponent.className = 'rules';

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `rule_${i}`;

        let label = document.createElement('label');
        label.htmlFor = `rule_${i}`;
        label.className = 'unactive-rule';

        let paragraph = document.createElement('p');
        paragraph.textContent = ruleName;

        individualActiveRuleComponent.appendChild(checkbox);
        individualActiveRuleComponent.appendChild(label);
        individualActiveRuleComponent.appendChild(paragraph);
        const parent = document.getElementById('component-list');
        parent.appendChild(individualActiveRuleComponent);
    }
}

function createNewRule(){
    const ruleNameParent = document.getElementById('rule-name-parent');
    const ruleNameInput = ruleNameParent.querySelector('input');
    ruleNameInput.disabled = false;
    ruleNameInput.value = '';
    const criteriaModalParent = document.getElementById('rule-description-parent');
    const criteriaModals = criteriaModalParent.querySelectorAll('.criteria-modal');
    criteriaModals.forEach(modal => modal.remove());
}

function saveNewRule(){
    const ruleNameParent = document.getElementById('rule-name-parent');
    const ruleNameInput = ruleNameParent.querySelector('input');
    const ruleName = ruleNameInput.value;
    const newRule = {
        name: ruleName,
        active: false,
        criteria: [],
    }
    components.push(newRule);
    const individualActiveRuleComponent = document.createElement('div');
    individualActiveRuleComponent.id = `rules${components.length - 1}`;
    individualActiveRuleComponent.className = 'rules';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `rule_${components.length - 1}`;

    const label = document.createElement('label');
    label.htmlFor = `rule_${components.length - 1}`;
    label.className = 'unactive-rule';

    const paragraph = document.createElement('p');
    paragraph.textContent = ruleName;

    individualActiveRuleComponent.appendChild(checkbox);
    individualActiveRuleComponent.appendChild(label);
    individualActiveRuleComponent.appendChild(paragraph);
    const parent = document.getElementById('component-list');
    parent.appendChild(individualActiveRuleComponent);

}

function deleteCriteriaModal(event){
    const criteriaModal = event.target.closest('.criteria-modal');
    if (criteriaModal) {
        criteriaModal.remove();
    }

    const ruleNameParent = document.getElementById('rule-name-parent');
    const ruleNameInput = ruleNameParent.querySelector('input');

    const ruleIndex = ruleNameInput.value;
    const rule = components.find((rule) => rule.name === ruleIndex);
    
    const criteriaIndex = rule.criteria.findIndex((criteria) => criteria === event.target.id);
    rule.criteria.splice(criteriaIndex, 1);
}

function init(){
    loadRules();
    for (let j=0; j<components[0].criteria.length; j++) {
        if (Object.keys(components[0].criteria[j])[0] === 'criteria_1') {
            createCriteriaModal(j, components[0].criteria[j]['criteria_1']);
        } else {
            createCriteriaModal2(j, components[0].criteria[j]['criteria_2']);
        }
    }
}

init();

addEventListener('click', function(event) {
    if (event.target.type === 'checkbox' && event.target.id.includes('rule')) {
        const ruleLabel = document.getElementById(event.target.id).nextElementSibling;
        ruleLabel.classList.toggle('active-rule');
        ruleLabel.classList.toggle('unactive-rule');
        const id = event.target.id.split('_')[1];
        components[id].active = !components[id].active;
        document.getElementsByClassName('rules')[id].querySelector('p').classList.toggle('active-p');
    }
});


addEventListener('click', function(event) {
    if (event.target.tagName === 'P' && event.target.parentElement.classList.contains('rules')) {
        const ruleIndex = event.target.parentElement.id.split('rules')[1];
        const criteriaModalParent = document.getElementById('rule-description-parent');
        const criteriaModals = criteriaModalParent.querySelectorAll('.criteria-modal');
        criteriaModals.forEach(modal => modal.remove());
        for (let j=0; j<components[ruleIndex].criteria.length; j++) {
            if (Object.keys(components[0].criteria[j])[0] === 'criteria_1') {
                createCriteriaModal(j, components[0].criteria[j]['criteria_1']);
            } else {
                createCriteriaModal2(j, components[0].criteria[j]['criteria_2']);
            }
        }

        const ruleNameParent = document.getElementById('rule-name-parent');
        const ruleNameInput = ruleNameParent.querySelector('input');
        ruleNameInput.value = components[ruleIndex].name;
        ruleNameInput.disabled = true;        
    }
});

document.getElementById('create-component-add-btn').addEventListener('click', createNewRule);
document.getElementById('save-rule').addEventListener('click', saveNewRule );
document.getElementById('rule-description-parent').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON' && event.target.textContent === 'Delete') {
        deleteCriteriaModal(event);
    }
});

document.getElementById('add-criteria-1').addEventListener('click', function() {
    const criteriaModalParent = document.getElementsByClassName('criteria-modal');
    const criteriaModalLength = criteriaModalParent.length;
    createCriteriaModal(criteriaModalLength);


    const ruleNameParent = document.getElementById('rule-name-parent');
    const ruleNameInput = ruleNameParent.querySelector('input');
    const ruleName = ruleNameInput.value;
    const rule = components.find((rule) => rule.name === ruleName);
    if (rule) {
        const key = `criteria_${criteriaModalLength}`;
        rule.criteria.push({[key]: []});
    }
})
    
document.getElementById('add-criteria-2').addEventListener('click', function() {
    const criteriaModalParent = document.getElementsByClassName('criteria-modal');
    const criteriaModalLength = criteriaModalParent.length;
    createCriteriaModal2(criteriaModalLength)


    const ruleNameParent = document.getElementById('rule-name-parent');
    const ruleNameInput = ruleNameParent.querySelector('input');
    const ruleName = ruleNameInput.value;
    const rule = components.find((rule) => rule.name === ruleName);
    if (rule) {
        const key = `criteria_${criteriaModalLength}`;
        rule.criteria.push({[key]: []});
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && event.target.tagName === 'INPUT' && event.target.value.trim() !== '') {
        addIP(event);
    }
});


