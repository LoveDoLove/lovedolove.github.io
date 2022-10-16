# Rename: Lcom/TestActivity; To Example: Lcom/activity/MainActivity;
# Under this line put in onCreate / onStart / onResume Working!!!
    invoke-direct {p0}, Lcom/TestActivity;->¬êØþ¼ê¬êØþ()V

# here your message will be jump from the invoke-direct
.method private ¬êØþ¼ê¬êØþ()V
    .registers 7

    const-string v0, ""

    const-string v2, "msghere"

    const/16 v3, 0xkeyhere

    const/4 v1, 0x0

    :goto_7
    invoke-virtual {v2}, Ljava/lang/String;->length()I

    move-result v4

    if-lt v1, v4, :cond_16

    const/4 v1, 0x1

    invoke-static {p0, v0, v1}, Landroid/widget/Toast;->makeText(Landroid/content/Context;Ljava/lang/CharSequence;I)Landroid/widget/Toast;

    move-result-object v0

    invoke-virtual {v0}, Landroid/widget/Toast;->show()V

    return-void

    :cond_16
    invoke-virtual {v2, v1}, Ljava/lang/String;->charAt(I)C

    move-result v4

    new-instance v5, Ljava/lang/StringBuilder;

    invoke-static {v0}, Ljava/lang/String;->valueOf(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    invoke-direct {v5, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    div-int/lit8 v0, v4, 0x2

    xor-int/2addr v0, v3

    int-to-char v0, v0

    invoke-virtual {v5, v0}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    add-int/lit8 v1, v1, 0x1

    goto :goto_7
.end method