<h2><?= "Mise à Jour" ?></h2>
<?= session()->getFlashdata('error') ?>
<?= validation_list_errors() ?>

<form action="<?= base_url("/productUpdate/$id") ?>" method="post">
    <?= csrf_field() ?>
    <label for="ProductName">Nom du Produit:</label>
    <input type="input" name="ProductName" id="ProductName" value="<?= service('request')->getPost('ProductName') ?>">
    <br>
    <label for="Quantite">Quantite:</label>
    <textarea name="Quantite" id="Quantite" cols="45" rows="4"><?= service('request')->getPost('Quantite') ?></textarea>
    <br>
    <input type="submit" name="submit" value="Mettre à jour">
</form>