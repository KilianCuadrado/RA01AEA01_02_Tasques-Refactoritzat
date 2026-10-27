## **Activitat: Refactoritza el teu Gestor de Tasques en Components**

En l’activitat anterior, heu desenvolupat una aplicació senzilla per gestionar tasques (afegir, eliminar, marcar com a completades, etc.) dins d’un únic component principal. Ara heu **de transformar aquesta aplicació en una arquitectura basada en components**, tal com es fa en aplicacions reals desenvolupades amb frameworks moderns com Vue.

### **Enunciat**

1. **Part 1: Anàlisi i descomposició**

   * Analitza la teva aplicació actual del *Gestor de Tasques*.

   * Identifica quines parts del codi podrien convertir-se en components independents.  
      *(Per exemple: un component per mostrar una tasca individual, un component per afegir noves tasques, un component per la llista completa...)*

2. **Part 2: Creació de components**

   * Crea, com a mínim, **aquests tres components**:

     * `TaskList.vue` → mostra totes les tasques.

     * `TaskItem.vue` → representa una tasca individual.

     * `TaskForm.vue` → gestiona l’entrada d’una nova tasca.

3. **Part 3: Comunicació entre components**

   * Des del **component pare (`App.vue`)**:

     * Passa la llista de tasques al component `TaskList` com a **prop**.

     * Passa funcions per afegir o eliminar tasques al component `TaskForm` o `TaskItem` mitjançant **events (`emit`)**.

   * Al **component `TaskItem`**:

     * Fes servir `defineProps()` per rebre la informació de cada tasca.

     * Fes servir `defineEmits()` per enviar un esdeveniment al pare quan l’usuari marqui una tasca com completada o la vulgui eliminar.

   * Al **component `TaskForm`**:

     * Gestiona l’input d’una nova tasca i utilitza `emit` per enviar-la al pare.

4. **Part 4: Presentació i millores**

   * Mostra la jerarquia de components (pots fer un esquema visual o arbre de components).

   * Revisa si pots afegir millores com:

     * Missatges de confirmació o notificacions.

     * Comptador de tasques pendents i completades (a nivell de component pare).

### **Avaluació**

| Criteri | Descripció | Nivell alt | Nivell mitjà | Nivell bàsic |
| ----- | ----- | ----- | ----- | ----- |
| **Divisió de components** | L’aplicació està correctament segmentada en components funcionals | Components coherents i reutilitzables | Components funcionen però poc modulars | Un sol component o estructura confusa |
| **Ús de defineProps()** | Es transmeten correctament dades del pare al fill | Totes les props correctes i tipades | Algunes props no utilitzades correctament | No es fa servir o hi ha errors |
| **Ús de defineEmits()** | Es gestionen correctament els esdeveniments dels fills cap al pare | Flux complet funcional | Alguns events no gestionats | No hi ha comunicació efectiva |
| **Resultat funcional** | L’aplicació funciona i mostra la interacció entre components | Perfectament operativa | Funcionalitat parcial | No operativa |

