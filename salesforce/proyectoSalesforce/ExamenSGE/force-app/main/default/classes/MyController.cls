public with sharing class MyController {
    @AuraEnabled
    public List<Integer> listas { get; set; }

    @AuraEnabled
    public void saveList() {
        NumberList__c newList = new NumberList__c();
        insert newList;
    
        List<ListItem__c> listItems = new List<ListItem__c>();
    
        // Crear un nuevo registro de elemento de lista para cada número
        for(Integer number : listas) {
            ListItem__c newItem = new ListItem__c();
            newItem.Number__c = number;
            newItem.NumberList__c = newList.Id; // Asociar el elemento de la lista con la lista
            listItems.add(newItem);
        }
    
        // Insertar todos los elementos de la lista en la base de datos
        try {
            insert listItems;
        } catch (DmlException e) {
            // Manejar el error
            System.debug('The following exception has occurred: ' + e.getMessage());
        }
    }   

    @AuraEnabled
    public static List<NumberList__c> getSavedLists() {
        return [SELECT Id, (SELECT Number__c FROM ListItems__r) FROM NumberList__c];
    }
}