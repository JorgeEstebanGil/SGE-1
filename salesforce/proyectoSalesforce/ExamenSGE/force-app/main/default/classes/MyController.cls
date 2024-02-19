public with sharing class MyController {
    @AuraEnabled
    public List<Integer> listas { get; set; } // Este es un atributo que se puede establecer desde tu componente Aura

    @AuraEnabled
    public void saveList() { // Este método ya no toma parámetros, en su lugar usa el atributo 'listas'
        NumberList__c newList = new NumberList__c();
        insert newList;
    
        List<ListItem__c> listItems = new List<ListItem__c>();
    
        // Aquí estás recorriendo el atributo 'listas'
        for(Integer number : listas) {
            ListItem__c newItem = new ListItem__c();
            newItem.Number__c = number;
            newItem.NumberList__c = newList.Id;
            listItems.add(newItem);
        }
    
        try {
            insert listItems;
        } catch (DmlException e) {
            System.debug('The following exception has occurred: ' + e.getMessage());
        }
    }   

    @AuraEnabled
    public static List<NumberList__c> getSavedLists() { // Este método devuelve una lista de objetos 'NumberList__c'
        return [SELECT Id, (SELECT Number__c FROM ListItems__r) FROM NumberList__c];
    }
}