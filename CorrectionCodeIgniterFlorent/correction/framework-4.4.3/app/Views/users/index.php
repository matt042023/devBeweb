<h2>
    <?= " Espace Utilisateur " ?>
</h2>
<p><a href="/newUser">Creer un Utilisateur</a></p>

<?php if (!empty($users) && is_array($users)): ?>

    <?php foreach ($users as $users_item): ?>

        <h3>
            <?= "Numero de l'utilisateur: ", esc($users_item->getId()) ?>
        </h3>

        <div class="main">
            <?= "Nom de l'utilisateur: ",esc($users_item->getUsername()) ?>
        </div>
        <p><a href="/users/<?= esc($users_item->getId(), 'url') ?>">Voir l'Utilisateur</a></p>
        <p><a href="/deleteUser/<?= esc($users_item->getId(), 'url') ?>">Supprimer l'Utilisateur</a></p>
        <p><a href="/newUpdateUser/<?= esc($users_item->getId(), 'url') ?>">Mettre à jour un Utilisateur</a></p>

    <?php endforeach ?>

<?php else: ?>

    <h3>Pas de User</h3>

    <p>Pas d'utilisateur a été trouvé.</p>

<?php endif ?>

<h2>
    <?= " Espace Produit " ?>
</h2>
<p><a href="/newProduct">Creer un produit</a></p>

<?php if (!empty($products) && is_array($products)): ?>

    <?php foreach ($products as $products_item): ?>

        <h3>
            <?= "ID du Produit: ",esc($products_item->getIdProduct()) ?>
        </h3>

        <div class="main">
            <?= "Nom du Produit: ", esc($products_item->getProductname()) ?>
        </div>
        <div class="main">
            <?= "Quantite: ", esc($products_item->getQuantite()) ?>
        </div>
        <p><a href="/product/<?= esc($products_item->getIdProduct(), 'url') ?>">Voir le Produit</a></p>
        <p><a href="/deleteProduct/<?= esc($products_item->getIdProduct(), 'url') ?>">Supprimer le produit</a></p>
        <p><a href="/newUpdateProduct/<?= esc($products_item->getIdProduct(), 'url') ?>">Mettre à jour le Produit</a></p>

    <?php endforeach ?>

<?php else: ?>

    <h3>Pas de produits</h3>

    <p>Aucun produit trouvé</p>

<?php endif ?>

<h2>
    <?= " Espace Employé " ?>
</h2>

<p><a href="/newPersonnel">Creer un employé</a></p>

<?php if (!empty($personnel) && is_array($personnel)): ?>

    <?php foreach ($personnel as $personnel_item): ?>

        <h3>
            <?= "ID de l'employé: ",esc($personnel_item->getIdpersonnel()) ?>
        </h3>

        <div class="main">
            <?= "Nom de l'employé : ",esc($personnel_item->getNom()) ?>
        </div>
        <div class="main">
            <?= "Prenom de l'employé: ", esc($personnel_item->getPrenom()) ?>
        </div>
        <p><a href="/personnel/<?= esc($personnel_item->getIdpersonnel(), 'url') ?>">Voir l'employé</a></p>
        <p><a href="/deletePersonnel/<?= esc($personnel_item->getIdpersonnel(), 'url') ?>">Supprimer l'employé</a></p>
        <p><a href="/newUpdatePersonnel/<?= esc($personnel_item->getIdpersonnel(), 'url') ?>">Mettre à jour l'Employé</a></p>

    <?php endforeach ?>

<?php else: ?>

    <h3>Pas d'employé</h3>

    <p>Vous n'avez pas d'employé</p>

<?php endif ?>