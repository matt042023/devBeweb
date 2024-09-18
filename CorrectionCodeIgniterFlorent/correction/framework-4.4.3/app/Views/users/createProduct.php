<h2><?= "Créer un nouveau produit" ?></h2>

<?= session()->getFlashdata('error') ?>
<?= validation_list_errors() ?>

<form action="/createProduct" method="post">
    <?= csrf_field() ?>

    <label for="ProductName">Nom du Produit</label>
    <input type="input" name="ProductName" value="<?= set_value('ProductName') ?>">
    <br>

    <label for="Quantite">Quantite</label>
    <textarea name="Quantite" cols="45" rows="4"><?= set_value('Quantite') ?></textarea>
    <br>

    <input type="submit" name="submit" value="Creer un nouveau Produit">
</form>
