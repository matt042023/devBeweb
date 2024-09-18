<h2><?= esc($title) ?></h2>

<?php if (! empty($news) && is_array($news)): ?>

    <?php foreach ($news as $news_item): ?>

        <h3><?= esc($news_item->getTitle()) ?></h3>

        <div class="main">
            <?= esc($news_item->getBody()) ?>
        </div>
        <p><a href="/news/<?= esc($news_item->getSlug(), 'url') ?>">View article</a></p>
        <p><a href="/delete/<?= esc($news_item->getId(), 'url') ?>">Delete article</a></p>

    <?php endforeach ?>

<?php else: ?>

    <h3>No News</h3>

    <p>Unable to find any news for you.</p>

<?php endif ?>